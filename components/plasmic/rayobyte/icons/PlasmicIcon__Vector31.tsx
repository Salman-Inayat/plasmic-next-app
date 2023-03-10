// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector31IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector31Icon(props: Vector31IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 70 29"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.796 13.497c.146 0 .293-.146.293-.146L19.275 2.967c1.32-.731 3.374-.877 4.547-.146l44.88 25.886c1.026-.731 1.173-1.755 0-2.34L23.822.481c-1.173-.731-3.226-.585-4.546.146L1.088 11.011c-1.32.731-1.467 1.755-.293 2.486z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector31Icon;
/* prettier-ignore-end */
