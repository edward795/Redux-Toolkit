import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState();
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const dispatch = useDispatch();

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);
  const onSavePostClicked = () => {
    try {
      setAddRequestStatus("pending");
      dispatch(addNewPost({ title, body: content, userId })).unwrap();
      setTitle("");
      setContent("");
      setUserId("");
    } catch (err) {
      console.log("Failed to save the post", err);
    } finally {
      setAddRequestStatus("idle");
    }
  };
  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === "idle";
  return (
    <div>
      <section>
        <h2>Add a New Post</h2>
        <form>
          <label htmlFor="postTitle">Post Title:</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
          />

          <label htmlFor="postAuthor">Author:</label>
          <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
            <option value=""></option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>

          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
          />

          <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
            Save Post
          </button>
        </form>
      </section>
    </div>
  );
};
