import { ReactNode } from "react";
import { UseFormSetValue } from "react-hook-form";

import { ControlItem } from "@/types";
import clsx from "clsx";

interface Props<T> {
  description?: string | ReactNode;
  error?: string;
  label?: string;
  state: T;
  name: string;
  items: ControlItem[];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setState: UseFormSetValue<any>;
}

export const Radio = <T,>({ description, error, label, name, items, state, setState }: Props<T>) => (
  <div className="control-container">
    {label ? <label className="control-label">{label}</label> : null}

    <div className="md:w-[calc(100%-246px)]">
      <div className="flex space-x-2">
        {items.map((item) => (
          <button
            key={item.value as string}
            type="button"
            onClick={() => setState(name, item.value)}
            className={`px-[24px] py-[14px] rounded-lg text-sm font-semibold ${
              state === item.value ? "bg-black text-white" : "border"
            } ${state !== item.value ? "hover:bg-grey" : ""}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className={clsx((error || description) && "mt-3")}>
        {error ? <div className="text-danger text-[13px]">{error}</div> : null}
        {description ? <div className="text-secondary text-[13px]">{description}</div> : null}
      </div>
    </div>
  </div>
);
