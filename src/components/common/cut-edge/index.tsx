import React from "react";
import { cutEdgeStyles } from "./styles.css";
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export default function CutEdge(props: Props) {
  return (
    <div
      className={classNames(
        cutEdgeStyles.container({ filled: false }),
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}
