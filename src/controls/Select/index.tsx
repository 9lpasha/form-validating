import { ControlItem } from "@/types";
import clsx from "clsx";
import { DetailedHTMLProps, ReactNode, SelectHTMLAttributes } from "react";

interface Props extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  description?: string | ReactNode;
  error?: string;
  label?: string;
  items: ControlItem[];
}

export const Select = ({ description, error, className, label, items, ...props }: Props) => (
  <div className="control-container">
    {label ? <label className="control-label">{label}</label> : null}

    <div className="md:w-[calc(100%-246px)]">
      <div className="relative">
        <select
          className={clsx(
            className,
            "w-full p-[18px] text-sm focus:outline-none bg-grey border-none rounded-lg appearance-none"
          )}
          {...props}
        >
          {items.map((item) => (
            <option value={item.value as string} key={item.label}>
              {item.label}
            </option>
          ))}
        </select>
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 scale-y-50 pointer-events-none">
          ▼
        </span>
      </div>

      <div className={clsx((error || description) && "mt-3")}>
        {error ? <div className="text-danger text-[13px]">{error}</div> : null}
        {description ? <div className="text-secondary text-[13px]">{description}</div> : null}
      </div>
    </div>
  </div>
);
