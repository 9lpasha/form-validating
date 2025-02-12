import { AdFormType } from "@/types";
import { SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { adFormFields } from "./constants";

export const onSubmit: SubmitHandler<AdFormType> = () => {
  toast.success("Объявление успешно создано и отправлено на модерацию");
};

export const onError: SubmitErrorHandler<AdFormType> = (data) => {
  toast.error(
    <ul>
      {Object.entries(data)
        .filter(([, field]) => !!field)
        .map(([key, field]) => (
          <li key={key} className="text-danger">
            <b>{adFormFields[key as keyof AdFormType]}</b>: {field.message}
          </li>
        ))}
    </ul>
  );
};
