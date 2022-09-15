import React from "react";

export default function Reply(props) {
  return (
    <div className="d-flex gap-2 my-2 ps-5">
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

        <span>{props.replyText}</span>
        <br />
        {props.likeNum > 0 ? (
          <span>
            <img src={"/like.svg"} width={20} />
            <span className="text-muted">{props.likeNum}</span>
          </span>
        ) : (
          <span> </span>
        )}
      </div>
    </div>
  );
}
