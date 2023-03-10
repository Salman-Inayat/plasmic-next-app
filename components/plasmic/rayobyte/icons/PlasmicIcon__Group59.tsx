// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group59IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group59Icon(props: Group59IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 34 54"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M33.835 46.68c0-5.26-3.522-11.524-8.302-14.155-2.264-1.378-4.276-1.503-5.786-.752l-.125.125s-.126 0-.126.126l-2.012 1.127-.252 2.255h.126c-.126.627-.126 1.253-.126 1.88 0 5.26 3.522 11.524 8.427 14.28 1.258.752 2.516 1.127 3.522 1.127l-.126.877 2.516-1.377h.125c1.258-1.128 2.139-3.007 2.139-5.512zm-8.302-1.879c-1.509-.877-2.515-2.756-2.515-4.51 0-1.753 1.006-2.38 2.515-1.628 1.51.877 2.642 2.881 2.642 4.51-.126 1.754-1.132 2.63-2.642 1.628zM8.301 19.998c1.384.751 2.642 1.127 3.774 1.127l.126.627 2.012-1.128s.126 0 .126-.125h.126c1.383-.877 2.264-2.631 2.264-5.136 0-5.387-3.522-11.525-8.302-14.156C6.163-.046 4.277-.296 2.767.33l-.126.125c-.125 0-.251.126-.251.126L.252 1.708l.125 1.378C.126 3.838 0 4.84 0 5.842c0 5.136 3.522 11.4 8.301 14.156zm0-12.527c1.51.876 2.642 2.88 2.642 4.51 0 1.628-1.006 2.38-2.642 1.502-1.509-.876-2.515-2.755-2.515-4.51 0-1.628 1.006-2.38 2.515-1.502zm17.484 9.395l-2.139 1.253.126.125L4.025 32.149l2.39 3.007-1.384 2.13 2.138-1.254 21.76-15.157-3.144-4.01z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group59Icon;
/* prettier-ignore-end */
