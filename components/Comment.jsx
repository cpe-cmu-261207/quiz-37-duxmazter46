import React from "react";
import Reply from "./Reply";

export default function Comment(props) {
  return (
    <div>
      {/* Entire Comment div */}
      <div className="d-flex gap-2 my-2">
        <img
          src={props.userImagePath}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#E5E7EB" }}
        >
          <span className="fw-semibold">{props.username}</span>
          <br />
          <span>{props.commentText}</span>
          {props.likeNum > 0 ? (
            <div className="d-flex align-items-center gap-1">
              <img src={"/like.svg"} width={20}></img>
              <span className="text-muted">{props.likeNum}</span>
            </div>
          ) : (
            <span> </span>
          )}
        </div>
      </div>
      {/*render Reply here... */}
    </div>
  );
}
