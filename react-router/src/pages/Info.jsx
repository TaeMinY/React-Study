import { Form, Outlet, useLoaderData, useParams } from "react-router-dom";

function Info() {
  const params = useParams();

  const { username, posts } = useLoaderData();

  return (
    <>
      <div>Info</div>
      <div>유저 아이디 : {params.id}</div>
      <div>유저 이름 : {username}</div>
      <Form method="post" action="">
        <button type="submit">제출</button>
      </Form>
      <Outlet context={{ id: params.id, posts: posts }}></Outlet>
    </>
  );
}

export default Info;
