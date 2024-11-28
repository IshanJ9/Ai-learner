import React, { useState } from "react";
import { FaFileAlt, FaYoutube, FaVideo, FaRegFile } from "react-icons/fa";
import "./App.css"; // Ensure this is the updated CSS

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [youtubeLink, setYoutubeLink] = useState(""); // State for YouTube link
  const [message, setMessage] = useState(""); // State for text document message input
  const [summary, setSummary] = useState(""); // State for the summary text

  // Options for the grid of actions
  const options = [
    {
      id: 1,
      title: "Pick a file",
      description: "Upload audio or video file",
      icon: <FaFileAlt />,
      onClick: () => alert("Pick a file clicked!"), // Placeholder functionality
    },
    {
      id: 2,
      title: "YouTube video",
      description: "Paste video link",
      icon: <FaYoutube />,
      onClick: () => setCurrentPage("youtubePage"), // Redirect to YouTube input page
    },
    {
      id: 3,
      title: "Meeting",
      description: "Paste meeting link",
      icon: <FaVideo />,
      onClick: () => alert("Meeting clicked!"), // Placeholder functionality
    },
    {
      id: 4,
      title: "Text document",
      description: "Upload text file",
      icon: <FaRegFile />,
      onClick: () => setCurrentPage("textDocumentPage"), // Redirect to text document page
    },
  ];

  // Handle text summarization logic
  const handleSummarize = () => {
    if (message.trim() === "") {
      setSummary("Please enter a message to summarize.");
    } else {
      setSummary(`Summarized: ${message.slice(0, 50)}...`); // Example summary
    }
  };

  // YouTube page UI
  if (currentPage === "youtubePage") {
    return (
      <div className="popup">
        <span
          className="back-text"
          onClick={() => setCurrentPage("home")}
        >
          &lt; Back
        </span>
        <h1>Paste YouTube Link</h1>
        <p>Enter the YouTube video link below to analyze:</p>
        <div className="input-container">
          <input
            type="text"
            placeholder="Paste YouTube link here..."
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)}
            className="input-box"
          />
        </div>
        <div className="actions">
          <button
            onClick={() => alert(`Summarizing: ${youtubeLink}`)}
            className="action-button"
          >
            Summarize
          </button>
          <button
            onClick={() => alert(`Generating questions for: ${youtubeLink}`)}
            className="action-button"
          >
            Generate Questions
          </button>
        </div>
      </div>
    );
  }

  // Text document page UI
  if (currentPage === "textDocumentPage") {
    return (
      <div className="popup">
        <span
          className="back-text"
          onClick={() => setCurrentPage("home")} // Go back to home page
        >
          &lt; Back
        </span>
        <h1>Message Summarizer</h1>
        <p>Enter the text below to summarize:</p>
        <input
          placeholder="Enter your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)} // Update the message state
          className="input-box"/>
        <button className="summarize-button" onClick={handleSummarize}>
          Summarize
        </button>
        {summary && <p className="summary-text">{summary}</p>} {/* Show the summary text */}
      </div>
    );
  }

  // Default home page UI
  return (
    <div className="popup">
      <h1>Get summary & transcription</h1>
      <div className="grid">
        {options.map((option) => (
          <div
            key={option.id}
            className="card"
            onClick={option.onClick}
          >
            <div className="icon">{option.icon}</div>
            <h3>{option.title}</h3>
            <p>{option.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
