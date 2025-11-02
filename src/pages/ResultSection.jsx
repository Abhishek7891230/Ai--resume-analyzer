import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "../styles/ResultSection.css";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";

export function ResultSection() {
  const [loading, setLoading] = useState(true);
  const [analysis, setAnalysis] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const text = localStorage.getItem("resumeText") || "";

    async function fetchAnalysis() {
      if (!text) {
        setAnalysis("No resume text found. Upload a resume first!");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          "https://router.huggingface.co/v1/chat/completions",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "meta-llama/Llama-3.1-8B-Instruct:novita",
              messages: [
                {
                  role: "system",
                  content:
                    "You are a resume reviewer. Respond in **clear markdown format** with sections titled 'Overall Score', 'Strengths', and 'Areas to Improve'. Use bullet points and avoid extra markdown lines like === or --- . and if the resume text is not a resume and just some other files or reports, just respond with 'This doesnt looks like a resume.' ",
                },
                {
                  role: "user",
                  content: text,
                },
              ],
              temperature: 0.5,
              max_tokens: 700,
            }),
          }
        );

        const data = await response.json();
        const content =
          data?.choices?.[0]?.message?.content || "No response from the model.";
        setAnalysis(content);
      } catch (err) {
        setAnalysis("Error fetching analysis.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchAnalysis();
  }, []);

  if (loading) return <p className="loading">Analyzing your resume...</p>;

  return (
    <>
      <div className="result-container">
        <button className="back-home-btn" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
        <h2 className="title">Resume Analysis</h2>
        <div className="result-card markdown-output">
          <ReactMarkdown>{analysis}</ReactMarkdown>
        </div>
      </div>
      <Footer />
    </>
  );
}
