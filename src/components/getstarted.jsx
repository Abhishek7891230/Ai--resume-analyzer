import { useEffect, useState } from "react";
import "../styles/getStarted.css";

export function GetStarted() {
  const [ready, setReady] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [progress, setProgress] = useState(0);

  function handleUploadBtn() {
    setUploading(true);
    setProgress(0);
  }

  useEffect(() => {
    let timer;
    if (uploading && progress <= 100) {
      timer = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 5;
          if (newProgress >= 100) {
            clearInterval(timer);
            setUploaded(true);
            setUploading(false);
          }
          return newProgress;
        });
      }, 200);
    }
    return () => clearInterval(timer);
  }, [uploading, progress]);

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

          {!uploading && !uploaded && (
            <button className="upload-btn" onClick={handleUploadBtn}>
              Uplaod resume
            </button>
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
              <p>✅ File uploaded successfully!</p>
              <button
                className="see-results-btn"
                onClick={() => {
                  window.open("/results", "_blank");
                  setUploading(false);
                  setUploaded(false);
                  setProgress(0);
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
