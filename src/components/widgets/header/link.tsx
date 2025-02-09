import React from "react";
import { Route } from "./route";
import { useScrollContext } from "@/hooks/use-scroll-to";
import classNames from "classnames";
interface Props extends Route {
  onAfterClick?: () => void;
  classname?: string;
}
export default function Link(props: Props) {
  const { route, label } = props;
  const { scrollToSection } = useScrollContext();

  return (
    <li
      className={classNames(
        props.classname,
        "font-primary text-sm  cursor-pointer",
      )}
      onClick={() => {
        props.onAfterClick?.();
        scrollToSection(route);
      }}
      role="button"
    >
      {label}
    </li>
  );
}
