// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group60IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group60Icon(props: Group60IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 34 53"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 5.844C0 .582 3.522-1.547 8.427 1.209c4.78 2.756 8.302 8.894 8.302 14.155 0 5.262-3.522 7.391-8.302 4.635C3.522 17.243 0 10.98 0 5.844zm25.785 11.149l3.144 3.883L7.17 36.16l-3.144-4.008 21.76-15.158zm-14.842-4.886c0-1.753-1.006-3.633-2.642-4.51-1.509-.876-2.515-.125-2.515 1.629s1.006 3.633 2.515 4.51c1.51.751 2.642 0 2.642-1.629zm6.289 24.93c0-5.262 3.521-7.392 8.427-4.636 4.78 2.756 8.301 9.02 8.301 14.156 0 5.261-3.521 7.39-8.301 4.635-4.905-2.63-8.427-8.894-8.427-14.156zm10.942 6.388c0-1.754-1.006-3.633-2.64-4.51-1.51-.877-2.516-.125-2.516 1.629s1.006 3.633 2.515 4.51c1.51.751 2.641-.126 2.641-1.629z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group60Icon;
/* prettier-ignore-end */
