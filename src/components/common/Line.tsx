import { cn } from "../../libs/utils";

const Line = ({ className }: { className?: string }) => {
  return <hr className={cn("border-[--border-s]", className)} />;
};

export default Line;
