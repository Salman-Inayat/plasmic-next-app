// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame293IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame293Icon(props: Frame293IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 354 6"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".4"}
        d={"M2 3h113"}
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeLinecap={"square"}
      ></path>

      <path
        opacity={".65"}
        d={"M119 3h114"}
        stroke={"currentColor"}
        strokeWidth={"4"}
        strokeLinecap={"square"}
      ></path>

      <path
        d={"M237 3h114"}
        stroke={"currentColor"}
        strokeWidth={"5"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Frame293Icon;
/* prettier-ignore-end */
