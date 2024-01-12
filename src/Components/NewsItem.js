import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {author,date,title,description,imageurl,newsurl} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageurl?"https://us.123rf.com/450wm/innakot/innakot2103/innakot210300348/165232152-wooden-news-sign-on-a-table-in-an-office.jpg?ver=6":imageurl} className="card-img-top" style={{height:"10rem"}} alt="..." />
          <div className="card-body" >
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-primary">
              Read more
            </a>
            <p className="card-text"><small className="text-body-secondary">Published on: {date.slice(0,10)}</small></p>
            <p className="card-text"><small className="text-body-secondary">Published by: {author?author:"unknown"}</small></p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
