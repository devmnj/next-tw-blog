import React from 'react'
import { useQuery } from 'urql';
import { useRouter } from 'next/router'
import { PostCard } from '../../Components/PostGrid';
import { GridSkelton } from '../../Components/Skeltons';
export default function CategoryPosts() {
    const router = useRouter()
    const { slug } = router.query


    const query = ` 
    query {
      posts (where: {tag:{eq:"${slug}"}}){
        title
        id     
        excerpt
        featured_image   
      }
    }
    `;

    const [result, reexecuteQuery] = useQuery({
        query: query,
    });
    const { data, fetching, error } = result;
    return (
        <section className=" dark:bg-gray-800 dark:text-gray-100">
            <h1 className='text-3xl text-center pt-4'>{slug} Posts</h1>
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {data ? data.posts.map((post) => (
                     <PostCard post={post} />
                    )) : <GridSkelton />}</div>
                {/* <Show when={tagedPosts()}  fallback={()=><GridSkelton/>}>
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"> 
            <For each={tagedPosts()}>{(post) => <PostCard post={post} />}</For>
         </div>  </Show> */}


            </div>
        </section>
    )
}
