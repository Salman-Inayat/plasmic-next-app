// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group37IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group37Icon(props: Group37IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 15"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20.476 14.505c-.378 0-.63-.125-1.006-.25L.98 3.607C.1 3.106-.278 1.853.225.977.728.098 1.986-.278 2.867.223l18.49 10.649c.88.5 1.257 1.753.754 2.63-.252.627-.88 1.002-1.635 1.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group37Icon;
/* prettier-ignore-end */
