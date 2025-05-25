import React from "react";
import { User } from "./../../../../types";
import { StatusBadge, Button, Avatar } from "./../../../../components";
import { Edit, Trash2 } from "lucide-react";

interface UserTableProps {
  users: User[];
  onEditUser: (user: User) => void;
  onDeleteUser: (user: User) => void;
}

export const UserTable: React.FC<UserTableProps> = ({
  users,
  onEditUser,
  onDeleteUser,
}) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="user-table w-full bg-white rounded-lg shadow overflow-hidden">
        <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-medium">
          <tr>
            <th className="user-table-cell px-6 py-4 text-sm text-left">User</th>
            <th className="user-table-cell px-6 py-4 text-sm text-left">Email</th>
            <th className="user-table-cell px-6 py-4 text-sm text-left">Role</th>
            <th className="user-table-cell px-6 py-4 text-sm text-left">Status</th>
            <th className="user-table-cell px-6 py-4 text-sm text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="user-table-row border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-150">
              <td className="user-table-cell px-6 py-4 text-sm">
                <div className="flex items-center gap-3">
                  <Avatar name={user.name} size="sm"/>
                  <div className="font-medium">{user.name}</div>
                </div>
              </td>
              <td className="user-table-cell text-gray-700">{user.email}</td>
              <td className="user-table-cell">{user.role}</td>
              <td className="user-table-cell">
                <StatusBadge status={user.status} />
              </td>
              <td className="user-table-cell text-right">
                <div className="flex justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEditUser(user)}
                    className="h-8 w-8"
                  >
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onDeleteUser(user)}
                    className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
