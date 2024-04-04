export interface User {
  id: number;
  username: string;
  avatar: string;
}

export interface Post {
  id: number;
  content: string;
  created_at: string;
  username: string;
  avatar: string;
}