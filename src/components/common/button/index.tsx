import React from "react";
import CutEdge from "../cut-edge";
import classNames from "classnames";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "default";
  btnClassname?: string;
}

const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    variant = "primary",
    type = "button",
    size = "default",
    className,
    btnClassname,
    ...rest
  } = props;
  return (
    <CutEdge
      filled={variant === "primary"}
      className={classNames(className, "flex justify-center")}
    >
      <button
        ref={ref}
        {...rest}
        type={type}
        className={classNames(
          size === "small"
            ? "px-4 py-2 text-xs md:text-sm"
            : "px-10 py-3 text-sm md:text-base",
          "font-primary flex-1",
          btnClassname,
        )}
      />
    </CutEdge>
  );
});

Button.displayName = "Button";
export default Button;
