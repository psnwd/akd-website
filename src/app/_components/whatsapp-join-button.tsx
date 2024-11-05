"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import type { IconType } from "react-icons";

interface WhatsAppJoinButtonProps {
  url: string;
  name: string;
  icon?: IconType | React.ElementType;
}

export default function JoinWhatsappButton({
  url = "https://chat.whatsapp.com/your-group-invite-code",
  name = "Join Our Group",
  icon: Icon = FaWhatsapp,
}: WhatsAppJoinButtonProps) {
  const handleJoin = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      onClick={handleJoin}
      className="inline-flex select-none items-center rounded bg-[#25D366]/80 px-4 py-5 font-bold text-white/90 hover:bg-[#128C7E]"
    >
      {Icon && <Icon className="mr-2 h-4 w-4" />}
      {name}
    </Button>
  );
}
