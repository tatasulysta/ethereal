import { colors } from "@/utils/colors";
import React from "react";

interface Props {
  color?: keyof typeof colors;
  size?: number;
}
export default function Bidding(props: Props) {
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
        d="M23.3063 15.5437L9.00001 32.0812C8.33962 32.7373 7.44652 33.1055 6.51563 33.1055C5.58474 33.1055 4.69165 32.7373 4.03126 32.0812C3.37518 31.4209 3.00696 30.5278 3.00696 29.5969C3.00696 28.666 3.37518 27.7729 4.03126 27.1125L20.475 12.75"
        stroke={colors[color]}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30.6562 16.9688C29.7179 14.2878 28.1787 11.857 26.1562 9.8625C21.3375 5.0625 16.65 4.6125 9.28125 2.90625C15.3984 7.73238 21.1111 13.0501 26.3625 18.8062"
        stroke={colors[color]}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27.1125 26.0625C25.5007 27.0273 24.1561 28.3803 23.2015 29.9982C22.2469 31.6161 21.7125 33.4472 21.6473 35.3246C21.582 37.202 21.9879 39.0658 22.8279 40.746C23.668 42.4262 24.9153 43.8694 26.4563 44.9437"
        stroke={colors[color]}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M40.2938 44.9437C41.8347 43.8694 43.0821 42.4262 43.9221 40.746C44.7621 39.0658 45.168 37.202 45.1028 35.3246C45.0375 33.4472 44.5032 31.6161 43.5485 29.9982C42.5939 28.3803 41.2493 27.0273 39.6375 26.0625"
        stroke={colors[color]}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30.0938 41.6813V29.7562H34.3501C35.1693 29.7447 35.9618 30.0471 36.5651 30.6015C37.1683 31.1559 37.5364 31.9202 37.5938 32.7375C37.5364 33.5548 37.1683 34.3191 36.5651 34.8735C35.9618 35.4279 35.1693 35.7303 34.3501 35.7187C35.1693 35.7072 35.9618 36.0096 36.5651 36.564C37.1683 37.1184 37.5364 37.8827 37.5938 38.7C37.5364 39.5173 37.1683 40.2816 36.5651 40.836C35.9618 41.3904 35.1693 41.6928 34.3501 41.6813H30.0938Z"
        stroke={colors[color]}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30.0938 35.7188H34.3501"
        stroke={colors[color]}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M33.3376 29.7563V26.3438"
        stroke={colors[color]}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M33.3376 41.6813V45.0938"
        stroke={colors[color]}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
