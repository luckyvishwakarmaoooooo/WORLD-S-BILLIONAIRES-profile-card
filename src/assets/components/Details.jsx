import React from "react";
import { useNavigate } from "react-router-dom";
import MarkImg from "./Mark-Zuckerberg.webp"; // adjust path if needed

const Details = () => {
  const navigate = useNavigate();

  return (
    <div className="details-page">
      
      {/* Animated background image */}
      <div
        className="bg-image"
        style={{ backgroundImage: `url(${MarkImg})` }}
      ></div>

      {/* Glass card */}
      <div className="details-card">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <h1>Mark Zuckerberg</h1>
        <p className="subtitle">Co-founder & CEO, Meta</p>

        <div className="details-info">
          <p><span>Full Name:</span> Mark Elliot Zuckerberg</p>
          <p><span>Born:</span> May 14, 1984</p>
          <p><span>Net Worth:</span> $100 Billion</p>
          <p><span>Company:</span> Meta Platforms</p>
          <p><span>Education:</span> Harvard University (Dropout)</p>
        </div>

        <button className="action-btn">FOLLOW</button>
      </div>
    </div>
  );
};

export default Details;
