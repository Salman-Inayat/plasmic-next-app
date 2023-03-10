// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AntDesignyoutubeOutlinedIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AntDesignyoutubeOutlinedIcon(
  props: AntDesignyoutubeOutlinedIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.5 11.934c0-.051 0-.11-.002-.178l-.012-.63a35.203 35.203 0 00-.103-1.92c-.07-.846-.174-1.551-.314-2.081a3.269 3.269 0 00-2.304-2.309c-.663-.178-1.962-.288-3.79-.356a110.2 110.2 0 00-2.73-.065c-.326-.005-.629-.007-.9-.01h-.69c-.271.003-.574.005-.9.01-.93.011-1.86.032-2.73.065-1.828.07-3.129.18-3.79.356a3.266 3.266 0 00-2.304 2.309c-.143.53-.244 1.235-.314 2.081a35.283 35.283 0 00-.103 1.92c-.007.227-.01.44-.012.63l-.002.178v.132c0 .051 0 .11.002.178l.012.63c.019.654.052 1.306.103 1.92.07.846.174 1.551.314 2.081a3.266 3.266 0 002.304 2.309c.661.178 1.962.288 3.79.356.87.033 1.8.054 2.73.066l.9.009h.69c.271-.002.574-.005.9-.01.93-.011 1.86-.032 2.73-.065 1.828-.07 3.129-.18 3.79-.356a3.262 3.262 0 002.304-2.309c.143-.53.244-1.235.314-2.081a36.14 36.14 0 00.115-2.55l.002-.178v-.132zm-1.688.122c0 .05 0 .103-.002.167-.002.182-.007.384-.012.602a31.564 31.564 0 01-.098 1.826c-.063.755-.152 1.373-.262 1.788-.146.541-.572.97-1.111 1.113-.493.132-1.733.237-3.418.3a105.982 105.982 0 01-3.574.073h-.67l-.886-.007a106.24 106.24 0 01-2.688-.066c-1.686-.065-2.928-.168-3.418-.3a1.58 1.58 0 01-1.11-1.113c-.11-.415-.2-1.034-.263-1.788a33.95 33.95 0 01-.098-1.826c-.007-.218-.01-.422-.012-.602l-.002-.167v-.112c0-.05 0-.103.002-.167.002-.182.007-.384.012-.602.016-.623.049-1.247.098-1.826.063-.754.152-1.373.263-1.788.145-.541.571-.97 1.11-1.113.493-.132 1.732-.237 3.418-.3a106.445 106.445 0 013.574-.073h.67l.886.007c.916.012 1.833.033 2.688.066 1.685.065 2.928.168 3.418.3a1.58 1.58 0 011.11 1.113c.11.415.2 1.034.263 1.788.05.58.08 1.203.098 1.826.008.218.01.422.012.602 0 .064.003.12.003.167v.112zM9.915 15.141l5.438-3.164-5.438-3.118v6.282z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AntDesignyoutubeOutlinedIcon;
/* prettier-ignore-end */
