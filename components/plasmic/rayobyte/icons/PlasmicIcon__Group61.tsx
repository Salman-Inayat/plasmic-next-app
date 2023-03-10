// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group61IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group61Icon(props: Group61IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 52 31"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.704 14.28c7.295 0 12.703-3.256 12.703-7.14V4.134h-1.132C22.39 1.629 17.986 0 12.704 0 7.42 0 3.019 1.754 1.132 4.134H0V7.14c0 4.01 5.409 7.14 12.704 7.14zm0-9.394c2.39 0 4.025 1.002 4.025 2.38 0 1.252-1.635 2.38-4.025 2.38-2.264 0-3.9-1.002-3.9-2.38s1.636-2.38 3.9-2.38z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M44.023 6.013V2.881h-7.044v2.881L10.817 22.424h-4.78v3.006l4.906 1.629 33.08-21.046zM51.57 20.42h-1.133c-2.012-2.506-6.289-4.135-11.571-4.135-5.283 0-9.685 1.754-11.572 4.134h-1.132v3.007c0 4.008 5.409 7.14 12.83 7.14 7.295 0 12.703-3.257 12.703-7.14v-3.007h-.126zm-12.704 5.386c-2.264 0-3.9-1.002-3.9-2.38 0-1.253 1.636-2.38 3.9-2.38 2.39 0 4.025 1.002 4.025 2.38-.126 1.253-1.636 2.38-4.025 2.38z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group61Icon;
/* prettier-ignore-end */
