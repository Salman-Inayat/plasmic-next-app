// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector29IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector29Icon(props: Vector29IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 120 44"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M117.631 16.526L78.765 38.903c-2.787 1.609-7.187 1.755-9.68.439L1.62 1.024C1.032.73.592.293.446 0c-.88 1.316-.44 2.779 1.173 3.803L69.085 42.12c2.493 1.463 6.747 1.17 9.68-.438l38.866-22.377c2.2-1.316 2.934-3.071 1.907-4.387-.293.438-1.027 1.023-1.907 1.608z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector29Icon;
/* prettier-ignore-end */
