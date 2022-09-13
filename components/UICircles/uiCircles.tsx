import type { NextPage } from "next";
import {
  GreenUICircleContainer,
  PurpleUICircleContainer,
} from "./uiCircles.style";

type Props = {
  type: string;
};

const UICircles: NextPage<Props> = ({ type }) => {
  if (type === "purple") {
    return (
      <PurpleUICircleContainer>
        <svg
          width="767"
          height="787"
          viewBox="0 0 767 787"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="575.723"
            cy="211.723"
            r="575"
            transform="rotate(-20.9744 575.723 211.723)"
            fill="url(#paint0_radial_1_190)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_1_190"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(0.722582 326.723) rotate(-5.99299) scale(690.046)"
            >
              <stop stopColor="#FCD757" />
              <stop offset="0.35068" stopColor="#02DC85" stopOpacity="0.8" />
              <stop offset="0.711065" stopColor="#22969C" stopOpacity="0.6" />
              <stop offset="1" stopColor="#EB54BC" stopOpacity="0.1" />
            </radialGradient>
          </defs>
        </svg>
      </PurpleUICircleContainer>
    );
  }

  return (
    <GreenUICircleContainer>
      <svg
        width="699"
        height="415"
        viewBox="0 0 699 415"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M621.36 287.977C668.44 401.555 694.204 563.079 698.652 772.549C703.1 982.019 621.797 1028.85 454.744 913.042C287.69 797.234 110.662 698.833 -76.3402 617.84C-263.342 536.847 -289.828 401.858 -155.798 212.873C-21.7677 23.8876 129.496 -39.2356 297.994 23.5029C466.491 86.2414 574.28 174.4 621.36 287.977Z"
          fill="url(#paint0_radial_1_186)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_1_186"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(546.811 180.364) rotate(165.632) scale(650.76 431.583)"
          >
            <stop stopColor="#EB54BC" />
            <stop offset="0.489583" stopColor="#7C1DC1" />
            <stop offset="1" stopColor="#67D8DE" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </GreenUICircleContainer>
  );
};

export default UICircles;
