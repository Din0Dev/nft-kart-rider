import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

const propTypes = {
  listNews: PropTypes.array,
};

const NewsCommon = ({ listNews = [] }) => {
  // const listNews = [
  //   {
  //     id: 1,
  //     src: "SRC Image",
  //     title: "TITLE",
  //     sdescription: "SHORT DESCRIPTION",
  //   },
  // ];
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="hh-new-container">
      <div className="hh-new-list">
        {listNews.map((item) => (
          <div key={item.id} className="hh-new__item">
            <div className="hh-new__item_thumbnail">
              <img src={item.src} />
            </div>
            <div className="hh-new__item_title">
              <h4>{item.title}</h4>
              <p>{item.sdescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

NewsCommon.propTypes = propTypes;
export default NewsCommon;
