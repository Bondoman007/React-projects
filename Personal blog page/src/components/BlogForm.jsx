import React, { useState } from 'react';

const BlogFormComponent = ({ addBlogPost, onchange }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [imgFile, setImgFile] = useState(null);
  const [imgUrl, setImgPreview] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = { title, body, author, imgUrl };
    onchange();
    addBlogPost(newPost);
    // Clear the form fields after submission
    setTitle('');
    setBody('');
    setAuthor('');
    setImgFile(null);
    setImgPreview(null);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImgFile(file);
    setImgPreview(URL.createObjectURL(file));
  };

  return (
    <div className="blog-form-container">
      <h1>Create a Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imgFile">Image File:</label>
          <input
            type="file"
            id="imgFile"
            onChange={handleFileChange}
            required
          />
          {imgFile && <img src={imgFile} alt="Preview" style={{ width: '100px', marginTop: '10px' }} />}
        </div>
        <button type="submit" className="create-post-button">Submit</button>
      </form>
    </div>
  );
};

export default BlogFormComponent;
