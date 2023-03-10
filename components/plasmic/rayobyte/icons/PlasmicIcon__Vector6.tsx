// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector6Icon(props: Vector6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 146 84"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M145.652 49.209h-1.761L59.745.854c-2.138-1.253-6.037-1.127-8.553.376L2.138 29.416c-.251.125-.503.25-.754.501H0v2.38c0 .752.503 1.504 1.51 2.005l84.397 48.605c2.138 1.253 6.038 1.127 8.553-.376l49.054-28.186c1.258-.752 2.012-1.754 2.138-2.63v-2.506z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector6Icon;
/* prettier-ignore-end */
