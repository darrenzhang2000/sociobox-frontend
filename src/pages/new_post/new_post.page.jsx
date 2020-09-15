import React, { useEffect } from "react";
import "./new_post.css";
const NewPost = () => {
  return (
    <div className="newPost">
      <h3>Create New Post</h3>
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" className="newInput" placeholder="Title" />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea
              id="textarea2"
              className="newTextarea"
              placeholder="Text"
            ></textarea>
          </div>
        </div>
      </form>
      <div className="newPostsButton">
        <a class="waves-effect waves-light btn-large">Cancel</a>
        <a class="waves-effect waves-light btn-large">Post</a>
      </div>
    </div>
  );
};
export default NewPost;
