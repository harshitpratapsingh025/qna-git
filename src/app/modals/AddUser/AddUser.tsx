import React, { useState } from "react";
import { Button, Modal } from "./../../components";
import { AddUserForm } from "./components";
import { Plus } from "lucide-react";

export const AddUser: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button variant={"outline"} onClick={() => setIsModalOpen(true)}>
        <Plus className="mr-2 h-4 w-4" />
        Add New User
      </Button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddUserForm />
      </Modal>
    </>
  );
};

