import { colors } from "@/utils/colors";
import React from "react";

interface Props {
  color?: keyof typeof colors;
  size?: number;
}

export default function Monitoring(props: Props) {
  const { color = "primary", size = 48 } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.1366 12C37.1366 12.7459 36.8404 13.4613 36.3129 13.9887C35.7855 14.5161 35.0702 14.8125 34.3241 14.8125H29.6366V9.18747H34.3241C35.0702 9.18747 35.7855 9.48378 36.3129 10.0112C36.8404 10.5387 37.1366 11.254 37.1366 12Z"
        stroke={colors[color]}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M37.1366 17.625C37.1366 18.3709 36.8404 19.0863 36.3129 19.6137C35.7855 20.1411 35.0702 20.4375 34.3241 20.4375H29.6366V14.8125H34.3241C35.0702 14.8125 35.7855 15.1088 36.3129 15.6362C36.8404 16.1637 37.1366 16.879 37.1366 17.625Z"
        stroke={colors[color]}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M32.7304 27.4688C39.4614 27.4688 44.9179 22.0121 44.9179 15.2812C44.9179 8.55024 39.4614 3.09372 32.7304 3.09372C25.9995 3.09372 20.5429 8.55024 20.5429 15.2812C20.5429 17.1241 20.952 18.8715 21.6842 20.4375L18.1992 27.9375L26.6366 25.8383C28.4293 26.8751 30.5106 27.4688 32.7304 27.4688Z"
        stroke={colors[color]}
        stroke-width="3"
        stroke-linejoin="round"
      />
      <path
        d="M12.6528 44.9062H29.6366"
        stroke={colors[color]}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.7383 8.71872H7.90702C6.62736 8.71872 5.40009 9.22705 4.49524 10.1319C3.59038 11.0368 3.08203 12.264 3.08203 13.5437V32.8436C3.08203 34.1233 3.59038 35.3507 4.49524 36.2556C5.40009 37.1603 6.62736 37.6688 7.90702 37.6688H34.4445C35.7242 37.6688 36.9514 37.1603 37.8563 36.2556C38.7611 35.3507 39.2694 34.1233 39.2694 32.8436V30.5156"
        stroke={colors[color]}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26.46 44.9063H15.8302C17.3631 42.9011 18.5333 40.0682 18.6875 37.6688H23.6029C23.757 40.0682 24.9272 42.9011 26.46 44.9063Z"
        stroke={colors[color]}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
