import Post from "@/components/post";
import useSWR from "swr";

import type { Post as IPost } from "@/types";
const fetcher = (url: string) => fetch(url).then(r => r.json())

function FeedList({ index }: { index: number }) {
  const { data, error, isLoading } = useSWR("/api/posts/feed?page=" + index, fetcher);
  console.log(data, error, isLoading)
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <ul>
      {data.data.map((post: IPost) => {
        return (
          <li className="my-5" key={post.id}>
            <Post post={post} />
          </li>
        );
      })}
    </ul>
  );
}

export default FeedList;