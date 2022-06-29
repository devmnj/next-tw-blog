import PostGrid from '../components/PostGrid'
import { useQuery } from 'urql';
import { GridSkelton } from '../components/Loading';
import { useEffect, useState } from 'react';
export default function Home() {
  const query = ` query {
    posts {
      createdAt
      title
      id
      excerpt
      featured_image
    }
  }`;
  
  const [result, reexecuteQuery] = useQuery({
    query: query,
  });
  const { data, fetching, error } = result; 
  return (
    <div  >
              
          {data ? <PostGrid  posts={data.posts}  />:<GridSkelton/> }  
    </div>
  )
}
