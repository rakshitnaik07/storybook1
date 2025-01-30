import React from "react";
// import PropTypes from "prop-types";
import "./desgin.css";

const Features = ({ features, showAll }) => {
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
      {!showAll && <div className="view-more">View all Features ⬇</div>}
      <div className="categories">
        Comfort | Interior | Exterior | Safety | Entertainment
      </div>
    </div>
  );
};

// Features.propTypes = {
//   features: PropTypes.array.isRequired,
//   showAll: PropTypes.bool,
// };

Features.defaultProps = {
  showAll: false,
};

export default Features;
