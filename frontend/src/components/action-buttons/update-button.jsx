"use client";

import { Edit } from "lucide-react";
import Button from "../button";
import UpdateModal from "../update-modal";
import { useState } from "react";

export default function UpdateButton({ link }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        className={
          "flex items-center gap-2 bg-stone-200 hover:bg-stone-300 h-10 px-3 cursor-pointer"
        }
        onClick={() => setOpen(true)}
      >
        <Edit size={16} />
      </Button>

      <UpdateModal link={link} open={open} setOpen={setOpen} />
    </>
  );
}
