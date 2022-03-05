import React from "react";
import PropTypes from 'prop-types';

export default function Post(props) {
  // if you want to alter the structure of your page, use conditional rendering this way
  // if(props.post.read) {
  //   return <h2>{props.post.title} already read</h2>
  // }
  return (
    <>
      <article>
        {/* one simple way to use conditional rendering:
        { props.post.read ? <s>{props.post.title}</s> : <strong>{props.post.title}</strong> } */}
        {props.post.read && <s>{props.post.title}</s>}
        {!props.post.read && props.post.title}
        <button onClick={() => props.onRemove(props.post.id)}>Remove</button>
        <br />
        <small>{props.post.subtitle}</small>
        <br />
        Media: {props.likes / 2}
      </article>
      <br />
    </>
  )
};

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
}