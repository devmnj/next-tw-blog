import { useRouter } from "next/router";
import { useQuery } from 'urql';
import { GridSkelton } from "../../Components/Skeltons";
import SinglePost from '../../Components/SinglePost'
  const Post = () => {
  const router = useRouter()
  const { pid } = router.query
  const query = `query  getPost {
    post( id:${pid}) {
      id
      title
      content 
      featured_image
      excerpt
      postAuthor
      tag
      userComments {
        body
      } 
    }
  }
`;

const [result, reexecuteQuery] = useQuery({
  query: query,
});
const { data, fetching, error } = result;

 
if (error) return <p>Oh no... {error.message}</p>;

  return (<>
   
  { data ? <SinglePost post={data.post}/>:<GridSkelton/>}
  </>)
}

export default Post
