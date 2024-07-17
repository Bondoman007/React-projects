import React from "react";

const Post = ({ post: { title, body,
imgUrl, author }, index }) => {
return (
	<div className="post-container">
	<h1 className="heading">{title}</h1>
	<img className="post-image" src={imgUrl} alt="post" />
	<p>{body}</p>
	<div className="post-meta">	
		<h4>Written by: {author}</h4>
	</div>
	</div>
);
};
export default Post;