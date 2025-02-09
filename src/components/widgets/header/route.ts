import { RouteEnum } from "@/utils/route-list";

export type Route = {
  label: string;
  route: RouteEnum;
};

export const ROUTE: Route[] = [
  { label: "Home", route: RouteEnum.Home },
  { label: "Features", route: RouteEnum.Features },
  { label: "Popular Collection", route: RouteEnum.Populars },
  { label: "Contact", route: RouteEnum.CTA },
];
