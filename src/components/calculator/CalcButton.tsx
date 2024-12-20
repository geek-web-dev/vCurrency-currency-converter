import { LucideIcon } from "lucide-react";
import { CALC_BUTTONS_VARIANTS } from "../../constants";
import { cn } from "../../libs/utils";

const CalcButton = ({
  action,
  Icon,
  variant = "number",
  className,
}: {
  action: () => void;
  Icon: string | LucideIcon;
  variant?: "number" | "operator" | "other";
  className?: string;
}) => {
  return (
    <div
      className={cn(
        CALC_BUTTONS_VARIANTS[variant],
        "rounded-md flex items-center justify-center p-4 text-2xl duration-150 cursor-pointer select-none",
        className
      )}
      onClick={action}
    >
      {typeof Icon === "string" ? Icon : <Icon />}
    </div>
  );
};

export default CalcButton;
