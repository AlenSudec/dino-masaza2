import React from "react";
import { quickInfoData } from "../data";

export function QuickInfo() {
  return (
    <div className="block-quick-info-2">
      <div className="container">
        <div className="block-quick-info-2-inner">
          <div className="row">
            {quickInfoData.map(infoObject => <InfoObject object={infoObject} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

function InfoObject({ object }) {
  const {
    iconClass,
    title,
    content,
    link
  } = object;

  return (
    <div className="col-sm-6 col-md-6 col-lg-3 mb-3 mb-lg-0">
      <div className="d-flex quick-info-2">
        <span className={`icon ${iconClass} mr-3`}></span>
        <div className="text">
          <strong className="d-block heading">{title}</strong>
          <span className="excerpt"><ContentAnchorWrapper link={link}>{content}</ContentAnchorWrapper></span>
        </div>
      </div>
    </div>
  )
}

function ContentAnchorWrapper({ children, link }) {
  if (link) {
    return <a href={link}>
      {children}
    </a>
  }
  return children
}