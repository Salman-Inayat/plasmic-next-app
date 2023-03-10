// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group43IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group43Icon(props: Group43IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 11"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.47 10.778c-.252 0-.63-.125-.881-.25L.885 3.262C.005 2.76-.247 1.759.256.882.76.005 1.766-.246 2.646.255L15.35 7.521c.88.501 1.132 1.503.629 2.38-.252.501-.88.877-1.51.877z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group43Icon;
/* prettier-ignore-end */
