import React from 'react';

const Post = (props) => {
  return (
    <div className="card">
      <div className="card__header">
        <span className="card__header_avatar">
          <img src={props.photo} />
        </span>
        <span className="card__header__textBox">
          <div className="card__header__textBox_name">
            <span className="bold">{props.name}</span>
            <img
              src="https://github.com/akylik/hw20-react/blob/gh-pages/img/star-active.png?raw=true"
              className="star-active"
              alt="Active Button"
            />
            <span className="gray">
              <a>{props.nickname}</a> • {props.date}
            </span>
          </div>
          <div className="card__header__textBox_status">
            <span>{props.content}</span>
          </div>
        </span>
        <span className="card__header__textBox_dw_Arrow">
          <img
            src="https://github.com/akylik/hw20-react/blob/gh-pages/img/down-arrow.png?raw=true"
            width="14px"
            alt="Down Arrow"
          />
        </span>
      </div>

      <div className="card__center">
        <img src={props.image} />
      </div>

      <div className="card__footer">
        <span>
          <a src="#">
            <img
              src="https://github.com/akylik/hw20-react/blob/gh-pages/img/tw-message.png?raw=true"
              alt="Message Icon"
            />
            <span className="icon2text">{props.message}</span>
          </a>
        </span>
        <span className="leftTab">
          <a src="#">
            <img
              src="https://github.com/akylik/hw20-react/blob/gh-pages/img/tw-retweet.png?raw=true"
              alt="Retweet Icon"
            />
            <span className="icon2text">{props.reTweet}</span>
          </a>
        </span>
        <span className="leftTab">
          <a src="#">
            <img
              src="https://github.com/akylik/hw20-react/blob/gh-pages/img/tw-like.png?raw=true"
              alt="Like Icon"
            />
            <span className="icon2text">{props.like}</span>
          </a>
        </span>
        <span className="leftTab">
          <a src="#">
            <img
              src="https://github.com/akylik/hw20-react/blob/gh-pages/img/tw-share.png?raw=true"
              alt="Share Icon"
            />
          </a>
        </span>
      </div>
    </div>
  );
}

export default Post;