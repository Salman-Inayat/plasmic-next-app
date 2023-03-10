// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector35IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector35Icon(props: Vector35IconProps) {
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
          "M28.893 0c.44.439.587 1.024.587 1.901v9.068c0 1.901-1.174 4.095-2.64 4.972L1.32 30.567c-.44.292-.88.292-1.32.292.44.439 1.173.585 1.907 0l25.52-14.625c1.466-.878 2.64-3.071 2.64-4.973V2.194C30.213.878 29.627 0 28.893 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector35Icon;
/* prettier-ignore-end */
