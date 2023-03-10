// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group39IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group39Icon(props: Group39IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 12"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.847 11.029c-.252 0-.63-.126-.88-.25L.884 3.261C.005 2.76-.247 1.633.256.882.76.005 1.892-.246 2.646.255l13.081 7.517c.88.5 1.132 1.628.63 2.38-.252.5-.881.877-1.51.877z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group39Icon;
/* prettier-ignore-end */
