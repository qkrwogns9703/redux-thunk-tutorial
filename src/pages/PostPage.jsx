import { useParams } from "react-router-dom";
import PostContainer from "../containers/PostContainer";

function PostPage({ match }) {
  const { id } = useParams();
  return <PostContainer postId={parseInt(id, 10)} />;
}

export default PostPage;
