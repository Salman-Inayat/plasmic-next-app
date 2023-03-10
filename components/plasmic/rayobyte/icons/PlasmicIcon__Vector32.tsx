// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector32IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector32Icon(props: Vector32IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 32"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.64 30.908l25.52-14.625c1.466-.878 2.64-3.071 2.64-4.973V2.243C30.8.34 29.626-.536 28.16.34L2.64 14.967C1.173 15.844 0 18.037 0 19.939v9.068c.147 1.901 1.173 2.778 2.64 1.901z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector32Icon;
/* prettier-ignore-end */
