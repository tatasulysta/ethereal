import React from "react";
import { cutEdgeStyles } from "./styles.css";
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  className?: string;
  filled?: boolean;
  colors?: "primary" | "weak";
}
export default function CutEdge(props: Props) {
  const { filled = true, colors = "primary" } = props;
  return (
    <div
      className={classNames(
        cutEdgeStyles.container({ filled, colors }),
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}
