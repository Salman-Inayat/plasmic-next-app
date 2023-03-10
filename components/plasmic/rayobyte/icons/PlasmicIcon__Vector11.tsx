// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector11Icon(props: Vector11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 138 188"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M133.955 74.38L5.535.47C4.653-.033 3.898-.158 3.27.218L0 1.972.755 3.35l1.006-.5v100.968c0 2.881 1.76 6.264 3.9 7.516l127.288 73.159-.126.125.377 2.505 3.145-1.753c1.006-.376 1.635-1.504 1.635-3.257V81.77c-.126-2.881-1.887-6.138-4.025-7.39z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector11Icon;
/* prettier-ignore-end */
