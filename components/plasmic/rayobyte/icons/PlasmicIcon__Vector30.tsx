// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector30Icon(props: Vector30IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 70 41"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M45.675 39.53L.795 13.643c-1.173-.73-1.026-1.755.294-2.632L19.275.627c1.32-.731 3.374-.877 4.547-.146l44.88 25.886c1.173.732 1.026 1.755-.293 2.633L50.222 39.384c-1.32.73-3.373.877-4.547.146z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector30Icon;
/* prettier-ignore-end */
