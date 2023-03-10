// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group63IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group63Icon(props: Group63IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 19"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.75 3.327L.11 1.865c-.147-.147-.147-.293 0-.293L2.603.11a.447.447 0 01.587 0l2.64 1.462c.147.146.147.293 0 .293L3.337 3.327a.447.447 0 01-.587 0zM11.404 8.3l-2.64-1.463c-.146-.146-.146-.293 0-.293l2.494-1.462a.447.447 0 01.586 0l2.64 1.462c.147.147.147.293 0 .293L11.991 8.3a.447.447 0 01-.587 0zm8.654 4.973l-2.64-1.463c-.147-.146-.147-.292 0-.292l2.493-1.463a.447.447 0 01.587 0l2.64 1.463c.147.146.147.292 0 .292l-2.493 1.463a.447.447 0 01-.587 0zm8.798 4.972l-2.64-1.463c-.147-.146-.147-.292 0-.292l2.493-1.462a.447.447 0 01.587 0l2.64 1.462c.147.146.147.293 0 .293l-2.493 1.462a.447.447 0 01-.587 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group63Icon;
/* prettier-ignore-end */
