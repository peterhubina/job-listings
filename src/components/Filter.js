import "../css/filter.css";

const Filter = ({ selectedTags, close }) => {
  return (
    <div className="filter">
      <div className="filter-content">
        <div className="filter-content_tags">
          {selectedTags.map((tag, index) => {
            return (
              <span key={index}>
                <p>{tag}</p>
                <a href="#">
                  <img
                    src={window.location.origin + "/images/icon-remove.svg"}
                    alt=""
                  />
                </a>
              </span>
            );
          })}
        </div>
        <a href="#" onClick={close}>
          Clear
        </a>
      </div>
    </div>
  );
};

export default Filter;
