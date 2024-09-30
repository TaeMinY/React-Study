import { useOutletContext } from "react-router-dom";

function UserPost() {
  const context = useOutletContext();

  console.log(context);

  return (
    <div style={{ backgroundColor: "blue" }}>
      <div>UserPost</div>
      {context.posts.map((e) => {
        return (
          <div key={e.title}>
            {e.title} {e.text}
          </div>
        );
      })}
    </div>
  );
}

export default UserPost;
