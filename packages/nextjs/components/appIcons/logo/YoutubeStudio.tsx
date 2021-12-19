import React from "react";

export const YoutubeStudio = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <circle cx="24" cy="24" r="14" fill="#dd2c00"></circle>
      <path
        fill="#dd2c00"
        d="M27.133,5h-6.265c-0.498,0-0.92,0.366-0.99,0.859L19,12h10l-0.877-6.141	C28.052,5.366,27.63,5,27.133,5z"
      ></path>
      <path
        fill="#dd2c00"
        d="M9.112,11.787l-3.133,5.426C5.73,17.644,5.836,18.192,6.228,18.5l4.88,3.831l5-8.66l-5.757-2.311	C9.889,11.174,9.361,11.356,9.112,11.787z"
      ></path>
      <path
        fill="#dd2c00"
        d="M5.979,30.787l3.133,5.426c0.249,0.431,0.777,0.613,1.239,0.428l5.757-2.311l-5-8.66L6.228,29.5	C5.836,29.808,5.73,30.356,5.979,30.787z"
      ></path>
      <path
        fill="#dd2c00"
        d="M20.867,43h6.265c0.498,0,0.92-0.366,0.99-0.859L29,36H19l0.877,6.141	C19.948,42.634,20.37,43,20.867,43z"
      ></path>
      <path
        fill="#dd2c00"
        d="M38.888,36.213l3.133-5.426c0.249-0.431,0.143-0.979-0.249-1.287l-4.88-3.831l-5,8.66l5.757,2.311	C38.111,36.826,38.639,36.644,38.888,36.213z"
      ></path>
      <path
        fill="#dd2c00"
        d="M42.021,17.213l-3.133-5.426c-0.249-0.431-0.777-0.613-1.239-0.428l-5.757,2.311l5,8.66l4.88-3.831	C42.164,18.192,42.27,17.644,42.021,17.213z"
      ></path>
      <polygon fill="#fff" points="20,18 20,30 30,24"></polygon>
    </svg>
  );
};