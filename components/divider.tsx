import React from "react";
import { cn } from "@/utils";

interface DividerProps {
  className?: string;
  color?: string;
}

const Divider = ({ className = "", color = "#E5E7EB" }: DividerProps) => {
  const dividerStyle = {
    backgroundColor: color,
  };

  return (
    <div
      className={cn("w-full h-px", className)}
      style={dividerStyle}
      role="separator"
      aria-orientation="horizontal"
    />
  );
};

export default Divider;
