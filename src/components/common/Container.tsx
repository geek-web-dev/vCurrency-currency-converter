import { ReactNode } from "react";
import { cn } from "../../libs/utils";

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-2xl px-2.5 md:px-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
