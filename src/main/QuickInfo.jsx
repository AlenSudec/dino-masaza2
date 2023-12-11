import React from "react";

const data = [
  {
    iconClass: "icon-home",
    title: "Visit our location",
    content: "2875 Beechwood Drive",
    link: null
  },
  {
    iconClass: "icon-phone",
    title: "Call us today",
    content: "+(123) 456 7890",
    link: "http://localhost:3000"
  },
  {
    iconClass: "icon-envelope",
    title: "Send us a message",
    content: "info@mysite.com",
    link: "http://localhost:3000"
  },
  {
    iconClass: "icon-clock-o",
    title: "Opening hours",
    content: "Mon-Fri 7:AM - 5PM",
    link: null
  },
]

export function QuickInfo() {
  return (
    <div className="block-quick-info-2">
      <div className="container">
        <div className="block-quick-info-2-inner">
          <div className="row">
            {data.map(infoObject => <InfoObject object={infoObject} />)}
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