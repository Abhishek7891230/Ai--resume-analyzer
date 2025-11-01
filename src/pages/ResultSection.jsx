import "../styles/ResultSection.css";

export function ResultSection() {
  const mockResponse = {
    score: 84,
    summary:
      "Your resume is strong overall. It highlights key achievements but could use more measurable results.",
    strengths: [
      "Excellent layout and consistent formatting",
      "Good use of technical keywords",
      "Professional tone maintained throughout",
    ],
    improvements: [
      "Add more quantifiable achievements. for example,'increased efficiency by 30%'",
      "Shorten the Objective section",
      "Consider emphasizing leadership roles more",
    ],
    resumeText: `
      John Doe
      Software Engineer | React | Node.js | AWS

      Experience:
      - Built and maintained scalable web apps in React and Node.js
      - Collaborated with cross-functional teams for deployment
      - Improved performance by 25% using caching and DB optimization
    `,
  };

  return (
    <div className="result-page">
      <div className="result-section-grid">
        <h2>resume Analysis</h2>
        <p className="summary">{mockResponse.summary}</p>
        <p className="score">Resume score: {mockResponse.score}%</p>
      </div>
      <div className="suggestion-grid">
        <h3>Strengths</h3>
        <ul>
          {mockResponse.strengths.map((strength, index) => (
            <li key={index}>{strength}</li>
          ))}
        </ul>

        <h3>Areas to Improve</h3>
        <ul>
          {mockResponse.improvements.map((imp, index) => (
            <li key={index}>{imp}</li>
          ))}
        </ul>
      </div>
      <div className="resume-grid">
        <h3>Your Resume Content:</h3>
        <pre>{mockResponse.resumeText}</pre>
      </div>
    </div>
  );
}
