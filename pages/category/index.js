import React from 'react';
import { useQuery } from 'urql';
import HBox from '../../Components/HBox';
import {Skelton} from '../../Components/Skeltons'

export default function Categories() {
    const query = ` query {
        posts {
          id
          tag
        }
      }`;

    const [result, reexecuteQuery] = useQuery({
        query: query,
    });
    const { data, fetching, error } = result;

    return (
        <>
            <section className="   dark:text-gray-100">

                <h1 className="text-2xl text-center"> Post Categories</h1>
                <div className="  max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div className="   m-2 grid grid-cols-3 gap-4  h-56">
                    {}
                        {data ? [...new Set(data.posts?.map((p) => p.tag))].map((tag,i) => (
                            <HBox key={i} caption={tag} innerCaption={tag} />)) : <Skelton />}
                    </div>
                </div>
            </section>
        </>
    );
}
