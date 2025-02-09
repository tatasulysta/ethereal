import React from "react";
import { cutEdgeStyles } from "./styles.css";
import classNames from "classnames";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  filled?: boolean;
  colors?: "primary" | "weak";
}

const CutEdge = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { filled = true, colors = "primary", className, ...rest } = props;
  return (
    <div
      className={classNames(
        cutEdgeStyles.container({ filled, colors }),
        className,
      )}
      ref={ref}
      {...rest}
    >
      {props.children}
    </div>
  );
});

CutEdge.displayName = "CutEdge";
export default CutEdge;
