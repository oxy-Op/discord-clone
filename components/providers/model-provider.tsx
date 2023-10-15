"use client";

import { ServerModal } from "@/components/modals/create-server";
import { useEffect, useState } from "react";
import { InviteModal } from "@/components/modals/invite-model";
import { EditServerModal } from "@/components/modals/edit-server";
import { MembersModal } from "@/components/modals/manage-members";
import { ChannelModal } from "@/components/modals/create-channel";
import { LeaveServer } from "@/components/modals/leave-server";
import { DeleteServer } from "@/components/modals/delete-server";
import { DeleteChannel } from "@/components/modals/delete-channel";
import { EditChannelModal } from "@/components/modals/edit-channel";
import { MessageFileModal } from "@/components/modals/message-file";
import { DeleteMessage } from "../modals/delete-message";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <ChannelModal />
      <LeaveServer />
      <DeleteServer />
      <DeleteChannel />
      <EditChannelModal />
      <MessageFileModal />
      <DeleteMessage />
    </>
  );
};
