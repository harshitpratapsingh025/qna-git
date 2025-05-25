export type UserRole = 'Admin' | 'User' | 'Editor' | 'Viewer';

export type UserStatus = 'Active' | 'Inactive' | 'Pending';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  avatarUrl?: string;
}

export interface LoginPayload {
  username: string;
  password: string;
}