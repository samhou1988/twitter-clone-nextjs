"use client";
import useSWR from "swr";
import Form from "./form";
import PostContainer from "@/components/post-container";

import { fetcher } from "@/utils/fetcher";
export default function Profile() {
  const { data, error, isLoading } = useSWR("/api/users/profile", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);

  return (
    <main>
      <h2>Profile</h2>
      <Form />
      <PostContainer username={data.data.username} showEditBtn={true} />
    </main>
  );
}