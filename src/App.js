import { useState } from "react";

import "./css/styles.css";
import JobListing from "./components/JobListing";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import Header from "./components/Header";

import data from "./API/data";

const App = () => {
  // Array of selected Tags by User
  const [selectedTags, setSelectedTags] = useState([]);
  // Show Filter Section
  const [showFilter, setShowFilter] = useState(false);

  const hasTags = (tags) => {
    console.log("Selected Tags: " + selectedTags + ". Has Tags: " + [...tags]);
    return tags.some((tag) => selectedTags.includes(tag)) ? true : false;
  };

  return (
    <div className="App">
      <Header />
      <main style={{ backgroundColor: "#f0fafb" }}>
        <div className="container">
          {showFilter && (
            <Filter
              selectedTags={selectedTags}
              close={() => {
                setShowFilter(false);
                setSelectedTags([]);
              }}
            />
          )}
          {data.map((value, index) => {
            return (
              hasTags && (
                <JobListing
                  key={index}
                  value={value}
                  onTagSelected={(tag) => {
                    !selectedTags.includes(tag) &&
                      setSelectedTags([...selectedTags, tag]);
                    !showFilter && setShowFilter(true);
                  }}
                  // Check if Job Listing has same tags as filtered tags
                  hasTags={(tags) => {
                    hasTags(tags);
                  }}
                />
              )
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
