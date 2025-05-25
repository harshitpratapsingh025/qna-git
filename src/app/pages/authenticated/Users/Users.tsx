import { useState } from "react";
import { toast } from "sonner";
import { UserTable } from "./components";
import { User } from "./../../../types";
import { mockUsers } from "./../../../mocks";
import { AddUser } from "../../../modals";

export const Users = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);

  const handleEditUser = (user: User) => {
    toast.info(`Edit user: ${user.name}`);
  };

  const handleDeleteUser = (user: User) => {
    toast.success(`User ${user.name} deleted`, {
      description: "The user has been successfully removed from the system.",
      action: {
        label: "Undo",
        onClick: () => {
          setUsers((prevUsers) => [...prevUsers, user]);
          toast.info(`Restored ${user.name}`);
        },
      },
    });

    // Remove the user from the state
    setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Users</h1>
          <AddUser />
        </div>
        <div className="w-full bg-grey rounded-lg shadow overflow-hidden p-2">
          <div className="p-1">
            <UserTable
              users={users}
              onEditUser={handleEditUser}
              onDeleteUser={handleDeleteUser}
            />
          </div>
        </div>

        <div className="text-center text-sm text-gray-500">
          Showing {users.length} users
        </div>
      </div>
    </div>
  );
};
