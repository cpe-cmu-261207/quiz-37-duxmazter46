import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import Reply from "../components/Reply";
import { comments } from "../libs/comments";

export default function Home() {
  const x = comments.map((x) => x);

  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto bg-white p-3 rounded rounded-3 shadow-sm"
      >
        {/* PostOwner Example*/}
        <PostOwner
          username="Teerit Youngmeesuk 640610643"
          userImagePath="https://upload.wikimedia.org/wikipedia/en/6/62/Kermit_the_Frog.jpg"
          postText="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
        />
        <div>
          {comments.map((x, i) => {
            <Comment
              username={x.username}
              userImagePath={x.userImagePath}
              likeNum={x.likeNum}
              commentText={x.commentText}
              replies={x.replies}
              key={i}
            ></Comment>;
          })}
        </div>
        {/* Comment Example */}
        <Comment
          username={x[0].username}
          userImagePath={x[0].userImagePath}
          likeNum={x[0].likeNum}
          commentText={x[0].commentText}
        />
        <Reply
          username={x[0].replies[0].username}
          userImagePath={x[0].replies[0].userImagePath}
          likeNum={x[0].replies[0].likeNum}
          replyText={x[0].replies[0].replyText}
        />
        <Reply
          username={x[0].replies[1].username}
          userImagePath={x[0].replies[1].userImagePath}
          likeNum={x[0].replies[1].likeNum}
          replyText={x[0].replies[1].replyText}
        />

        <Comment
          username={x[1].username}
          userImagePath={x[1].userImagePath}
          likeNum={x[1].likeNum}
          commentText={x[1].commentText}
        />
      </div>
    </div>
  );
}
