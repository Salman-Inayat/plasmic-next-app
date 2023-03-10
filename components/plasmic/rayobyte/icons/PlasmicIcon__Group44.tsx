// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group44IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group44Icon(props: Group44IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 8"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.061 7.646c-.252 0-.629-.125-.88-.25L.885 3.262C.005 2.76-.247 1.759.256.882.76.005 1.766-.246 2.646.255L9.941 4.39c.88.501 1.132 1.504.63 2.38-.252.502-.881.877-1.51.877z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group44Icon;
/* prettier-ignore-end */
