import { colors } from "@/utils/colors";
import React from "react";
interface Props {
  color?: keyof typeof colors;
  size?: number;
}

export default function Market(props: Props) {
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
        d="M8.41669 24L13 17.5833L19.4167 25.8332L27.6667 12.9999"
        stroke={colors[color]}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M43.014 4.98591C41.9826 3.95447 40.5836 3.375 39.1251 3.375H8.87499C7.4163 3.375 6.01736 3.95447 4.98591 4.98591C3.95447 6.01736 3.375 7.4163 3.375 8.87499V30.8751C3.375 32.3336 3.95447 33.7326 4.98591 34.764C6.01736 35.7956 7.4163 36.375 8.87499 36.375H39.1251C40.5836 36.375 41.9826 35.7956 43.014 34.764C44.0456 33.7326 44.625 32.3336 44.625 30.8751V8.87499C44.625 7.4163 44.0456 6.01736 43.014 4.98591Z"
        stroke={colors[color]}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M33.1667 24.9167V13.9166H37.2917C38.0211 13.9166 38.7206 14.2063 39.2363 14.7221C39.7521 15.2378 40.0418 15.9373 40.0418 16.6666C40.0418 17.3959 39.7521 18.0954 39.2363 18.6112C38.7206 19.1269 38.0211 19.4166 37.2917 19.4166C38.0211 19.4166 38.7206 19.7063 39.2363 20.2221C39.7521 20.7379 40.0418 21.4372 40.0418 22.1666C40.0418 22.896 39.7521 23.5954 39.2363 24.1112C38.7206 24.6268 38.0211 24.9167 37.2917 24.9167H33.1667Z"
        stroke={colors[color]}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M33.1667 19.4166H37.2917"
        stroke={colors[color]}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M35.9166 13.9166V11.1666"
        stroke={colors[color]}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M35.9166 24.9167V27.6667"
        stroke={colors[color]}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.5528 44.6451H33.4472"
        stroke={colors[color]}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29.9132 44.6451H18.0875C19.7929 42.3538 21.0947 39.1166 21.2663 36.375H26.7345C26.9061 39.1166 28.2079 42.3538 29.9132 44.6451Z"
        stroke={colors[color]}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
