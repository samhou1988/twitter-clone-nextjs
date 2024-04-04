import User from "@/components/user";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

import type { User as IUser } from '@/types';

function FollowingList({ index }: { index: number }) {
  const { data: userData } = useSWR("/api/users/profile", fetcher);
  const { data: followerData } = useSWR(
    () => "/api/users/" + userData.data.id + "/following?page=" + index,
    fetcher
  );

  if (!followerData) return <div>loading...</div>;

  return (
    <ul>
      {followerData.data.map((user: IUser) => {
        return (
          <li className="my-5" key={user.id}>
            <User user={user} />
          </li>
        );
      })}
    </ul>
  );
}

export default FollowingList;