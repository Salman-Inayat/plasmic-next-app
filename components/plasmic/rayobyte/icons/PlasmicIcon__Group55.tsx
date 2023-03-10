// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group55IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group55Icon(props: Group55IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 125 72"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.71 9.145L.66 4.51c-.88-.501-.88-1.253 0-1.754L4.811.376c.88-.501 2.264-.501 3.145 0l8.05 4.635c.88.501.88 1.253 0 1.754l-4.151 2.38c-.755.5-2.264.5-3.145 0zm13.584 7.767l-8.05-4.635c-.88-.502-.88-1.253 0-1.754l4.151-2.38c.88-.501 2.264-.501 3.145 0l8.05 4.635c.88.5.88 1.252 0 1.753l-4.151 2.38c-.88.502-2.39.502-3.145 0zm53.833 31.067l-48.55-27.935c-.88-.502-.88-1.253 0-1.754l4.15-2.38c.881-.502 2.265-.502 3.145 0l48.55 27.935c.881.501.881 1.253 0 1.754l-4.15 2.38c-.755.501-2.264.501-3.145 0zm13.585 7.767l-8.05-4.635c-.88-.501-.88-1.253 0-1.754l4.151-2.38c.88-.501 2.264-.501 3.144 0l8.05 4.635c.88.5.88 1.252 0 1.754l-4.15 2.38c-.88.5-2.264.5-3.145 0zm13.458 7.767l-8.05-4.635c-.88-.502-.88-1.253 0-1.754l4.151-2.38c.88-.502 2.264-.502 3.144 0l8.05 4.635c.881.5.881 1.252 0 1.754l-4.15 2.38c-.881.5-2.264.5-3.145 0zm13.459 7.641l-8.05-4.635c-.881-.5-.881-1.253 0-1.754l4.15-2.38c.881-.5 2.264-.5 3.145 0l8.05 4.635c.88.501.88 1.253 0 1.754l-4.151 2.38c-.88.501-2.264.501-3.144 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group55Icon;
/* prettier-ignore-end */
