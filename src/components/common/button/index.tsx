import React from "react";
import CutEdge from "../cut-edge";
import classNames from "classnames";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "default";
}

export default function Button(props: Props) {
  const {
    variant = "primary",
    type = "button",
    size = "default",
    ...rest
  } = props;
  return (
    <CutEdge filled={variant === "primary"}>
      <button
        {...rest}
        type={type}
        className={classNames(
          size === "small"
            ? "px-4 py-2 text-xs md:text-sm"
            : "px-10 py-3 text-sm md:text-base",
          "font-primary",
          rest.className,
        )}
      />
    </CutEdge>
  );
}
