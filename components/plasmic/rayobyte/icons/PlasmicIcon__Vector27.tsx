// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector27Icon(props: Vector27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 75 196"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M46.2 0c-1.76 0-3.667.439-5.134 1.316L31.093 7.02H0v146.836c0 1.024.44 1.902 1.613 2.633l67.466 38.318c1.174.731 2.787 1.023 4.4 1.023l.734-147.713L46.2 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector27Icon;
/* prettier-ignore-end */
