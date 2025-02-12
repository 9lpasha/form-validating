import clsx from "clsx";
import { DetailedHTMLProps, ReactNode, TextareaHTMLAttributes } from "react";

interface Props extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  description?: string | ReactNode;
  error?: string;
  label?: string;
}

export const Textarea = ({ description, error, className, label, ...props }: Props) => (
  <div className="control-container">
    {label ? <label className="control-label">{label}</label> : null}

    <div className="md:w-[calc(100%-246px)]">
      <textarea
        className={clsx(className, "w-full p-[18px] text-sm focus:outline-none bg-grey border-none rounded-lg")}
        {...props}
      />

      <div className={clsx((error || description) && "mt-1")}>
        {error ? <div className="text-danger text-[13px]">{error}</div> : null}
        {description ? <div className="text-secondary text-[13px]">{description}</div> : null}
      </div>
    </div>
  </div>
);
