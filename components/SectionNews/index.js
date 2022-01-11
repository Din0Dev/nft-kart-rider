import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import NewsCommon from "../NewsCommon";

const propTypes = {};

const SectionNews = (props) => {
  //! State
  const dispatch = useDispatch();
  const listNews = [
    {
      id: 1,
      src: "/static/assets/img/news/thumbnail.png",
      title: "[THÔNG BÁO]",
      sdescription: "Một thông báo gì đó",
    },
    {
      id: 2,
      src: "/static/assets/img/news/thumbnail.png",
      title: "[THÔNG BÁO]",
      sdescription: "Một thông báo gì đó",
    },
    {
      id: 3,
      src: "/static/assets/img/news/thumbnail.png",
      title: "[THÔNG BÁO]",
      sdescription: "Một thông báo gì đó",
    },
    {
      id: 4,
      src: "/static/assets/img/news/thumbnail.png",
      title: "[THÔNG BÁO]",
      sdescription: "Một thông báo gì đó",
    },
    {
      id: 5,
      src: "/static/assets/img/news/thumbnail.png",
      title: "[THÔNG BÁO]",
      sdescription: "Một thông báo gì đó",
    },
    {
      id: 6,
      src: "/static/assets/img/news/thumbnail.png",
      title: "[THÔNG BÁO]",
      sdescription: "Một thông báo gì đó",
    },
    {
      id: 7,
      src: "/static/assets/img/news/thumbnail.png",
      title: "[THÔNG BÁO]",
      sdescription: "Một thông báo gì đó",
    },
    {
      id: 8,
      src: "/static/assets/img/news/thumbnail.png",
      title: "[THÔNG BÁO]",
      sdescription: "Một thông báo gì đó",
    },
    {
      id: 9,
      src: "/static/assets/img/news/thumbnail.png",
      title: "[THÔNG BÁO]",
      sdescription: "Một thông báo gì đó",
    },
    {
      id: 10,
      src: "/static/assets/img/news/thumbnail.png",
      title: "[THÔNG BÁO]",
      sdescription: "Một thông báo gì đó",
    },
  ];
  //! Function

  //! Render
  return (
    <div className="section-new">
      <div className="hh-news">
        <div className="hh-news-banner">
          <img src="/static/assets/img/news/banner-frames.png" alt="" />
          <h3>TIN TỨC</h3>
        </div>
      </div>
      <NewsCommon listNews={listNews} />
    </div>
  );
};

SectionNews.propTypes = propTypes;
export default SectionNews;
