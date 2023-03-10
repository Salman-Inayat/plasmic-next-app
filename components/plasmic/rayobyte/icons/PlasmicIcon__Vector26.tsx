// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector26Icon(props: Vector26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 120 196"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M119.826 168.699V22.301L61.453 7.091 50.746.95C48.253-.513 44-.22 41.066 1.388l-9.973 5.704H0L9.24 148.37c0 1.024.44 1.901 1.613 2.632l58.226 43.876c2.494 1.462 6.747 1.17 9.68-.439l38.867-22.376c1.466-1.024 2.346-2.34 2.2-3.364z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector26Icon;
/* prettier-ignore-end */
