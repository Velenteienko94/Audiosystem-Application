import "./index.scss";
import { JSONPlaceholderApi } from "./api";
import createPostsList from "./components/post-list";

document.body.appendChild(createPostsList());

JSONPlaceholderApi.createPost({
  userId: 101,
  title: "TITLE CONTENT",
  body: "BODY CONTENT",
}).then((resp) => console.log(resp));
