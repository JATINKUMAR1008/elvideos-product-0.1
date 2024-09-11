import { cn } from "@/utils/class.merge";

interface ButtonProps extends React.AllHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
export const Button = ({
  children,
  type,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button // or type="submit" or type="reset" or remove the type attribute
      {...props}
      type={type as "submit" | "reset" | "button" | undefined}
      className={cn(
        "px-4 py-2 h-12 flex items-center bg-blue-600 text-left text-white w-full",
        className || ""
      )}
    >
      {children}
    </button>
  );
};