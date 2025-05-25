import { User } from './../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    role: 'Admin',
    status: 'Active',
    avatarUrl: 'https://i.pravatar.cc/150?u=john.smith@example.com',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    role: 'User',
    status: 'Active',
    avatarUrl: 'https://i.pravatar.cc/150?u=sarah.johnson@example.com',
  },
  {
    id: '3',
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    role: 'Editor',
    status: 'Inactive',
    avatarUrl: 'https://i.pravatar.cc/150?u=michael.brown@example.com',
  },
  {
    id: '4',
    name: 'Emily Wilson',
    email: 'emily.wilson@example.com',
    role: 'Viewer',
    status: 'Pending',
    avatarUrl: 'https://i.pravatar.cc/150?u=emily.wilson@example.com',
  },
  {
    id: '5',
    name: 'David Lee',
    email: 'david.lee@example.com',
    role: 'User',
    status: 'Active',
    avatarUrl: 'https://i.pravatar.cc/150?u=david.lee@example.com',
  },
];