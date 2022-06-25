import React from "react";
import { reactionAdded } from "./postsSlice";
import { useDispatch } from "react-redux";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😃",
  heart: "❤",
  rocket: "💉",
  coffee: "☕",
};
export const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      {Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
          <button
            key={name}
            type="button"
            className="reactionButton"
            onClick={() =>
              dispatch(reactionAdded({ postId: post.id, reaction: name }))
            }
          >
            {emoji} {post.reactions[name]}
          </button>
        );
      })}
    </React.Fragment>
  );
};
