import { useState, useEffect } from "react";

import "../css/jobListing.css";

const JobListing = ({ value, onTagSelected, hasTags }) => {
  const [id, setId] = useState(value.id);
  const [company, setCompany] = useState(value.company);
  const [logo, setLogo] = useState(value.logo);
  const [recent, setRecent] = useState(value.new);
  const [featured, setFeatured] = useState(value.featured);
  const [position, setPosition] = useState(value.position);
  const [role, setRole] = useState(value.role);
  const [level, setLevel] = useState(value.level);
  const [postedAt, setPostedAt] = useState(value.postedAt);
  const [contract, setContract] = useState(value.contract);
  const [location, setLocation] = useState(value.location);
  const [languages, setLanguages] = useState(value.languages);
  const [tools, setTools] = useState(value.tools);

  const [tags, setTags] = useState([]);

  const selectedTag = (val) => onTagSelected(val);

  useEffect(() => {
    setTags([role, level, ...languages, ...tools]);
  }, []);

  useEffect(() => {
    hasTags(tags);
    console.log("This job listing has tags: ", tags);
  }, [tags]);

  return (
    <div className="jobListing">
      <div style={{ padding: "1rem" }}>
        <img src={window.location.origin + logo} alt={"logo"} />
        <div className="spans">
          <span id="company">{company}</span>
          {recent && <span id="new">new!</span>}
          {featured && <span id="featured">featured</span>}
        </div>
        <div className="description">
          <h2>{position}</h2>
          <span>{postedAt}</span>
          <span>{contract}</span>
          <span>{location}</span>
          <hr />
        </div>
        <div className="tags">
          {
            <button className="tag" onClick={() => selectedTag(role)}>
              {role}
            </button>
          }
          {
            <button className="tag" onClick={() => selectedTag(level)}>
              {level}
            </button>
          }
          {languages.map((value, index) => {
            return (
              <button
                className="tag"
                key={index}
                onClick={() => selectedTag(value)}
              >
                {value}
              </button>
            );
          })}
          {tools.map((value, index) => {
            return (
              <button
                className="tag"
                key={index}
                onClick={() => selectedTag(value)}
              >
                {value}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JobListing;
