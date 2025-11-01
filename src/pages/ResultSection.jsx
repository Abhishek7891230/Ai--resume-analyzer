import { useEffect, useState } from "react";
import "../styles/ResultSection.css";

export function ResultSection() {
  const [resumeText, setResumeText] = useState("");
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    const text = localStorage.getItem("resumeText");
    setResumeText(text || "No resume text found. Please upload again.");
    if (text) analyzeResume(text);
  }, []);

  function analyzeResume(text) {
    let score = 60;
    const strengths = [];
    const improvements = [];

    if (text.toLowerCase().includes("project")) {
      strengths.push("Includes projects section — recruiters love that.");
      score += 5;
    } else {
      improvements.push("Add a Projects section to highlight practical work.");
    }

    if (
      text.toLowerCase().includes("react") ||
      text.toLowerCase().includes("node")
    ) {
      strengths.push("Good technical stack — React/Node.js mentioned.");
      score += 10;
    } else {
      improvements.push("Mention your tech stack clearly (React, Node, etc.).");
    }

    if (text.match(/\d+%|\d+\s*(years|yrs)/i)) {
      strengths.push("Uses measurable metrics — adds credibility.");
      score += 10;
    } else {
      improvements.push(
        "Add quantifiable achievements for example, 'Improved speed by 30%')."
      );
    }

    if (text.split(/\s+/).length < 150) {
      improvements.push(
        "Your resume is too short, consider adding more detail."
      );
      score -= 5;
    }

    const summary =
      score > 80
        ? "Your resume looks solid! Just add a few points and you're good to go."
        : score > 60
        ? "Good base — with some improvements, it’ll stand out more."
        : "Needs improvement — try adding more structure and achievements.";

    setAnalysis({
      score,
      summary,
      strengths,
      improvements,
    });
  }

  if (!analysis) {
    return (
      <div className="result-page">
        <p>Analyzing your resume... please wait a sec </p>
      </div>
    );
  }

  return (
    <div className="result-page">
      <div className="result-section-grid">
        <h2>Resume Analysis</h2>
        <p className="summary">{analysis.summary}</p>
        <p className="score">Resume score: {analysis.score}%</p>
      </div>

      <div className="suggestion-grid">
        <h3>Strengths</h3>
        <ul>
          {analysis.strengths.length > 0 ? (
            analysis.strengths.map((s, i) => <li key={i}>{s}</li>)
          ) : (
            <li>None detected (ouch)</li>
          )}
        </ul>

        <h3>Areas to Improve</h3>
        <ul>
          {analysis.improvements.length > 0 ? (
            analysis.improvements.map((imp, i) => <li key={i}>{imp}</li>)
          ) : (
            <li>Looking perfect — keep it up!</li>
          )}
        </ul>
      </div>

      <div className="resume-grid">
        <h3>Your Resume Content:</h3>
        <pre>{resumeText}</pre>
      </div>
    </div>
  );
}
