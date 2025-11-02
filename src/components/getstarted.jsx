import { useState } from "react";
import "../styles/getStarted.css";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.min.mjs";
import { useNavigate } from "react-router-dom";

pdfjsLib.GlobalWorkerOptions.workerSrc = URL.createObjectURL(
  new Blob(
    [
      `importScripts('${new URL(
        "pdfjs-dist/build/pdf.worker.min.mjs",
        import.meta.url
      ).toString()}');`,
    ],
    { type: "application/javascript" }
  )
);

export function GetStarted() {
  const [ready, setReady] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [progress, setProgress] = useState(0);

  const navigate = useNavigate();

  async function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file || file.type !== "application/pdf") {
      alert("Please upload a valid PDF file!");
      return;
    }

    setUploading(true);
    setProgress(0);

    const reader = new FileReader();
    reader.onload = async function () {
      const typedarray = new Uint8Array(this.result);
      const pdf = await pdfjsLib.getDocument(typedarray).promise;
      let pdfText = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const pageText = content.items.map((item) => item.str).join(" ");
        pdfText += pageText + " ";
      }

      localStorage.setItem("resumeText", pdfText);
      console.log("Extracted text preview:", pdfText.slice(0, 200) + "...");

      simulateProgress();
    };
    reader.readAsArrayBuffer(file);
  }

  function simulateProgress() {
    let val = 0;
    const timer = setInterval(() => {
      val += 5;
      setProgress(val);
      if (val >= 100) {
        clearInterval(timer);
        setUploading(false);
        setUploaded(true);
      }
    }, 150);
  }

  return (
    <div className="main-page">
      <p className="main-text">
        Enhance your resume with AI-driven insights that highlight your
        strengths and key areas for improvement.
      </p>

      <button
        className={`ready-btn ${ready ? "fade-out" : ""}`}
        onClick={() => setReady(true)}
      >
        Get started →
      </button>

      {ready && (
        <div className="uploadSection slide-up">
          <span>
            Upload your resume file here. PDF only. Max 2MB file size.
          </span>

          {!uploading && !uploaded && (
            <label className="upload-btn">
              Upload Resume
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileUpload}
                style={{ display: "none" }}
              />
            </label>
          )}

          {uploading && (
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${progress}%` }}
              ></div>
              <p>{progress}%</p>
            </div>
          )}

          {uploaded && (
            <div className="upload-success">
              <p>File uploaded successfully!</p>
              <button
                className="see-results-btn"
                onClick={() => {
                  navigate("/results");
                  setUploaded(false);
                }}
              >
                See Results
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
