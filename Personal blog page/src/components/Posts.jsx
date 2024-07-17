import React from "react";

import Post from "./Post";
const Posts = ({blogPosts}) => {
return (
	<div className="main-container">
       <div className="posts-container">
			{blogPosts.map((post, index) => (
				<Post key={index} index={index} post={post} />
			))}
	   </div>
	</div>
	
);
};
export default Posts;