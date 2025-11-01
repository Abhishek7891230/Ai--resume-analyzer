import { useState } from "react";
import "../styles/getStarted.css";

export function GetStarted() {
  const [ready, setReady] = useState(false);

  return (
    <div className="main-page">
      <p className="main-text">
        Analyze Your Resume with AI-Powered Insights Optimize your resume, get
        ATS-ready, and land your dream job faster.
      </p>

      <button
        className={`ready-btn ${ready ? "fade-out" : ""}`}
        onClick={() => setReady(true)}
      >
        Get started
      </button>

      {ready && (
        <div className="uploadSection slide-up">
          <span>
            Drop your resume here or upload a file. PDF only. Max 2MB file size.
          </span>
          <button className="upload-btn">Uplaod resume</button>
        </div>
      )}
    </div>
  );
}
