"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { FileInput, Input, Radio, Textarea, Select } from "@/controls";
import { AdFormType } from "@/types";

import { adFormFields, adFormSchema, adTypes, cities, conditions, connections } from "./constants";
import { onError, onSubmit } from "./helpers";
import { DefaultLink } from "./DefaultLink";

export const AdForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<AdFormType>({
    resolver: zodResolver(adFormSchema),
    defaultValues: {
      condition: "new",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="rounded-lg bg-white p-6 md:p-8">
        <h2 className="form-h2">Параметры</h2>

        <Input
          {...register("title")}
          placeholder="Название *"
          error={errors.title?.message}
          description="Например, «iPhone 6S Plus серый космос 32 гб» или «Фотоаппарат Canon 700D Kit 18-55»"
          label={adFormFields.title}
        />

        <Radio
          state={watch("condition")}
          items={conditions}
          name="condition"
          label={adFormFields.condition}
          description={<DefaultLink>Какую вещь можно считать новой</DefaultLink>}
          setState={setValue}
        />

        <Select {...register("type")} items={adTypes} label={adFormFields.type} error={errors.type?.message} />

        <h2 className="form-h2 mt-9">Подробности</h2>

        <Textarea
          {...register("description")}
          rows={4}
          placeholder="Описание *"
          label={adFormFields.description}
          description="Не указывайте в описании телефон и e-mail — для этого есть отдельные поля"
          error={errors.description?.message}
        />

        <Input {...register("price")} placeholder="₽ *" error={errors.price?.message} label={adFormFields.price} />

        <FileInput
          {...register("images")}
          trigger={trigger}
          setValue={setValue}
          label={adFormFields.images}
          error={errors.images?.message}
        />

        <Input
          {...register("video")}
          placeholder="https://youtube.com/..."
          error={errors.video?.message}
          label={adFormFields.video}
        />

        <h2 className="form-h2 mt-9">Место сделки</h2>

        <Select {...register("city")} label={adFormFields.city} items={cities} error={errors.city?.message} />

        <h2 className="form-h2 mt-9">Контакты</h2>

        <Input
          {...register("phone")}
          className="w-full p-2 border rounded mt-1"
          placeholder="8 900 000 00 00"
          label={adFormFields.phone}
          description={
            <>
              Чтобы ваши номера не попали в базы мошенников, мы показываем вместо них подменные, а звонки переводим вам.
              Эту защиту нельзя отключить. <br />
              <DefaultLink>Подробнее</DefaultLink>
            </>
          }
          maxLength={11}
          error={errors.phone?.message}
        />

        <Select
          {...register("connection")}
          label={adFormFields.connection}
          items={connections}
          error={errors.connection?.message}
        />

        <div className="mt-6 flex flex-wrap gap-4 gap-y-4">
          <button type="submit" className="bg-green text-white px-6 py-3.5 rounded-lg font-semibold hover:opacity-80">
            Разместить
          </button>
          <button
            type="button"
            className="bg-white px-6 py-3.5 rounded-lg font-semibold border border-gray-300 hover:bg-grey ml-0"
          >
            Сохранить и выйти
          </button>
        </div>

        <span className="block text-secondary text-[13px] mt-4">
          Вы публикуете объявление и данные в нём, чтобы их мог посмотреть кто угодно в интернете. Вы также соглашаетесь
          с <DefaultLink>правилами.</DefaultLink>
        </span>
      </div>
    </form>
  );
};
