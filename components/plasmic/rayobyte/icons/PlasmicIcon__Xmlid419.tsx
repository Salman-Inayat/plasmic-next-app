// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid419IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid419Icon(props: Xmlid419IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.287 10.213L3.229 0H0l6.431 15.567h1.601L14.574 0h-3.202L7.287 10.213z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Xmlid419Icon;
/* prettier-ignore-end */
