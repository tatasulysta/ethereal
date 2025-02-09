import { useScrollContext } from "@/hooks/use-scroll-to";
import { CaretDown, List, X } from "@phosphor-icons/react";
import classNames from "classnames";
import React from "react";
import { ROUTE } from "./route";
import Link from "./link";

export default function Dropdown() {
  const [open, setOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLUListElement>(null);
  const { navRef } = useScrollContext();
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden bg-blue dark:text-white px-4 py-2 rounded-md flex items-center gap-2"
      >
        {open ? <X size={24} /> : <List size={24} />}
      </button>

      {/* DROPDOWN*/}
      {open && (
        <ul
          className={classNames(
            "absolute  mt-2 bg-darkBlue  rounded-md  w-svw left-0 flex flex-col gap-2 font-semibold",
          )}
          style={{
            top: (navRef.current?.clientHeight || 0) - 20,
          }}
          ref={menuRef}
        >
          {ROUTE.map((route, index) => (
            <Link
              key={`route-lg-${index}`}
              {...route}
              classname="py-4 ml-6"
              onAfterClick={() => setOpen(false)}
            />
          ))}
        </ul>
      )}
    </>
  );
}
