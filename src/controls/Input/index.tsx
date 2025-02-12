import clsx from "clsx";
import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  description?: string | ReactNode;
  error?: string;
  label?: string;
}

export const Input = ({ description, error, className, label, ...props }: Props) => (
  <div className="control-container">
    {label ? <label className="control-label">{label}</label> : null}

    <div className="md:w-[calc(100%-246px)]">
      <input
        type="text"
        className={clsx(className, "w-full p-[18px] text-sm focus:outline-none bg-grey border-none rounded-lg")}
        {...props}
      />

      <div className={clsx((error || description) && "mt-3")}>
        {error ? <div className="text-danger text-[13px]">{error}</div> : null}
        {description ? <div className="text-secondary text-[13px]">{description}</div> : null}
      </div>
    </div>
  </div>
);
