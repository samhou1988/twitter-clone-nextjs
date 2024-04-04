import User from "@/components/user";
import useSWR from "swr";
import type { User as IUser } from '@/types';
import { fetcher } from "@/utils/fetcher";

function FollowersList({ index }: { index: number }) {
  const { data: userData } = useSWR("/api/users/profile", fetcher);
  const { data: followerData } = useSWR(
    () => "/api/users/" + userData.data.id + "/followers?page=" + index,
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

export default FollowersList;