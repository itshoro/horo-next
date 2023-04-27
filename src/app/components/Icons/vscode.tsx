export const VSCodeIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 256 256"
  >
    <mask
      id="a"
      width="256"
      height="256"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M181.53 254.25a15.93 15.93 0 0012.7-.49l52.71-25.36a16 16 0 009.06-14.42V42.02a16 16 0 00-9.06-14.42l-52.7-25.36a15.94 15.94 0 00-18.2 3.1L75.15 97.38 31.2 64.02a10.66 10.66 0 00-13.61.61L3.49 77.45a10.67 10.67 0 00-.01 15.78L41.59 128 3.48 162.77a10.67 10.67 0 000 15.78l14.1 12.82a10.66 10.66 0 0013.62.6l43.95-33.36 100.9 92.06c1.6 1.6 3.47 2.8 5.48 3.58zm10.5-184.36L115.49 128l76.56 58.12V69.89z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#0065A9"
        d="M246.94 27.64l-52.75-25.4a15.95 15.95 0 00-18.2 3.1L3.33 162.76a10.67 10.67 0 00.02 15.78l14.1 12.82a10.67 10.67 0 0013.62.6L239 34.24c6.98-5.3 17-.32 17 8.44v-.62a16 16 0 00-9.06-14.41z"
      />
      <g filter="url(#filter0_d)">
        <path
          fill="#007ACC"
          d="M246.94 228.36l-52.75 25.4a15.95 15.95 0 01-18.2-3.1L3.33 93.24a10.67 10.67 0 01.02-15.78l14.1-12.82a10.67 10.67 0 0113.62-.6L239 221.76c6.98 5.3 17 .32 17-8.44v.62a16 16 0 01-9.06 14.41z"
        />
      </g>
      <g filter="url(#filter1_d)">
        <path
          fill="#1F9CF0"
          d="M194.2 253.76a15.95 15.95 0 01-18.2-3.1c5.9 5.91 16 1.73 16-6.62V11.96c0-8.35-10.1-12.53-16-6.63a15.95 15.95 0 0118.2-3.1l52.73 25.37A16 16 0 01256 42.02v171.96a16 16 0 01-9.07 14.42l-52.73 25.36z"
        />
      </g>
      <path
        fill="url(#paint0_linear)"
        fillRule="evenodd"
        d="M181.38 254.25a15.94 15.94 0 0012.7-.49l52.7-25.36a16 16 0 009.06-14.42V42.02a16 16 0 00-9.06-14.42l-52.7-25.36a15.94 15.94 0 00-18.19 3.1L75 97.38 31.04 64.02a10.66 10.66 0 00-13.61.61L3.33 77.45a10.67 10.67 0 000 15.78L41.42 128l-38.1 34.77a10.67 10.67 0 000 15.78l14.1 12.82a10.66 10.66 0 0013.61.6L75 158.62l100.9 92.06c1.6 1.6 3.47 2.8 5.49 3.58zm10.5-184.36L115.32 128l76.56 58.12V69.89z"
        clipRule="evenodd"
        opacity=".25"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        width="298.82"
        height="236.15"
        x="-21.49"
        y="40.52"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="10.67" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          mode="overlay"
          result="effect1_dropShadow"
        />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
      <filter
        id="filter1_d"
        width="122.67"
        height="297.35"
        x="154.67"
        y="-20.67"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="10.67" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          mode="overlay"
          result="effect1_dropShadow"
        />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
      <linearGradient
        id="paint0_linear"
        x1="127.84"
        x2="127.84"
        y1=".66"
        y2="255.34"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);
