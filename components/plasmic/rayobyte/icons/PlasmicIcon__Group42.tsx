// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group42IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group42Icon(props: Group42IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 23"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M33.965 22.053c-.251 0-.629-.126-.88-.25L.885 3.261C.005 2.76-.247 1.759.256.882.76.005 1.766-.246 2.646.255l32.2 18.54c.88.502 1.132 1.504.629 2.38-.252.627-.88.878-1.51.878z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group42Icon;
/* prettier-ignore-end */
