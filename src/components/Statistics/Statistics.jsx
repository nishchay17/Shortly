import React from "react";
import "./statistics.css";
import brand from "../../assets/icon-brand-recognition.svg";
import deatil from "../../assets/icon-detailed-records.svg";
import custom from "../../assets/icon-fully-customizable.svg";

function Statistics() {
  return (
    <div className="statistics">
      <div className="container ">
        <div className="statistics-text text-center">
          <div className="statistics-heading">Advanced Statistics</div>
          <div className="statistics-lead">
            Track how your links are performing across the web with <br />
            our advanced statistics dashboard.
          </div>
        </div>
        <div className="statistics-card-group flex-space-between">
          <div className="statistics-card">
            <div className="statistics-card-image">
              <img alt={"brand"} src={brand} />
            </div>
            <div className="statistics-card-heading">Brand Recognition</div>
            <div className="statistics-card-lead">
              Boost your brand recognition with each chick. Generic links don't
              mean a thing. Branded links help intill confidence in your
              content.
            </div>
          </div>
          <div className="line"></div>
          <div className="line-vertical"></div>
          <div className="statistics-card">
            <div className="statistics-card-image">
              <img alt={"deatil"} src={deatil} />
            </div>
            <div className="statistics-card-heading">Detailed Records</div>
            <div className="statistics-card-lead">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </div>
          </div>
          <div className="line"></div>
          <div className="line-vertical"></div>
          <div className="statistics-card ">
            <div className="statistics-card-image">
              <img alt={"custom"} src={custom} />
            </div>
            <div className="statistics-card-heading">Fully Customizable</div>
            <div className="statistics-card-lead">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
