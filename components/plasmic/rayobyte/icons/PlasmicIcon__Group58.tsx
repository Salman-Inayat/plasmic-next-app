// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group58IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group58Icon(props: Group58IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 47 68"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.98 38.68l20.628 11.9c1.258.752 2.39.501 2.893-.501l6.163-13.028c.377-.877.252-2.13-.252-3.508-.628-1.378-1.509-2.505-2.64-3.132L9.684 10.87c-.629-.376-1.132-.501-1.635-.376l-2.013-6.64c-.251-.75-.754-1.502-1.383-1.878L1.509.22C.63-.28 0 .096 0 1.098s.755 2.13 1.51 2.63l2.138 1.253 9.433 30.19c-.755.627-1.132 1.63-1.132 3.007 0 1.629.629 3.383 1.51 5.011-.881.501-1.51 1.629-1.51 3.257 0 3.257 2.264 7.266 5.157 8.894 2.893 1.629 5.157.25 5.157-3.006a9.51 9.51 0 00-.377-2.63l11.194 6.388c-.252.626-.377 1.253-.377 2.13 0 3.257 2.264 7.265 5.156 8.894 2.893 1.628 5.157.25 5.157-3.007s-2.264-7.265-5.157-8.894h-.125l-20.25-11.65c-.127 0-.127 0-.252-.125-1.132-.627-2.013-2.255-2.013-3.508-.377-1.378.63-1.88 1.761-1.253zm26.791-4.761l-6.163 13.028-21.634-12.402-6.289-20.168 34.086 19.542zM18.993 50.58c0 1.253-.88 1.88-2.013 1.128-1.132-.627-2.012-2.255-2.012-3.508 0-1.253.88-1.88 2.012-1.128 1.132.502 2.013 2.13 2.013 3.508zM39.62 62.356c0 1.252-.88 1.879-2.012 1.127-1.132-.626-2.012-2.255-2.012-3.508 0-1.252.88-1.879 2.012-1.127 1.132.626 2.012 2.255 2.012 3.508z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group58Icon;
/* prettier-ignore-end */
