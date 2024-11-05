"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface DemoCardProps {
  headerTitle: string;
  description: string;
  disclaimer?: string;
  buttonText: string;
  disappearTime: number; // in milliseconds
  horizontalPosition: "left" | "right";
  verticalPosition: "top" | "bottom";
}

export default function NotificationCard({
  headerTitle = "Welcome to the Demo",
  description = "This is a demo card that will disappear after you click OK.",
  disclaimer,
  buttonText = "OK",
  disappearTime = 3000,
  horizontalPosition = "right",
  verticalPosition = "top",
}: DemoCardProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isVisible) {
      timer = setTimeout(() => {
        setIsVisible(true);
      }, disappearTime);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isVisible, disappearTime]);

  const handleClick = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const positionClasses = {
    left: "left-4",
    right: "right-4",
    top: "top-4",
    bottom: "bottom-4",
  };

  return (
    <div
      className={`fixed ${positionClasses[horizontalPosition]} ${positionClasses[verticalPosition]} z-[9999] w-80 overflow-hidden rounded-lg border border-border bg-background shadow-lg transition-all duration-300 ease-in-out`}
    >
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-semibold">{headerTitle}</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClick}
            className="h-6 w-6"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        {disclaimer ? (
          <p className="mb-4 text-sm text-muted-foreground">{disclaimer}</p>
        ) : null}
        <Button onClick={handleClick} className="w-full">
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
