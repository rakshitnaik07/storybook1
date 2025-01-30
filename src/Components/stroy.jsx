import React, { useState } from "react";
import "./desgin.css";

const Features = ({ features }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="features-box">
      <h2>Features</h2>
      <div className="features-list">
        {features.slice(0, showAll ? features.length : 6).map((feature, index) => (
          <div key={index} className="feature-item">
            <span className="check-icon">✔</span> {feature}
          </div>
        ))}
      </div>
      <div className="view-more" onClick={() => setShowAll(!showAll)}>
        {showAll ? "View Less ⬆" : "View all Features ⬇"}
      </div>
      <div className="categories">
        Comfort | Interior | Exterior | Safety | Entertainment
      </div>
    </div>
  );
};

export default Features;
