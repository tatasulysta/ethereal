import React from "react";

export default function Subtitle(props: React.PropsWithChildren) {
  const { children } = props;
  return (
    <h3 className="text-xl md:text-3xl font-tertiary text-center mb-12">
      {children}
    </h3>
  );
}
