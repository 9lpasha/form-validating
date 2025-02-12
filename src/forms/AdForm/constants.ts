import * as z from "zod";

import { AdFormType, ControlItem } from "@/types";
import { hasLetterWords } from "@/utils";

export const adFormFields: Record<keyof AdFormType, string> = {
  city: "Город",
  condition: "Состояние",
  connection: "Способы связи",
  description: "Описание объявления",
  images: "Фотографии",
  phone: "Телефон",
  price: "Цена",
  title: "Название объявления",
  type: "Вид объявления",
  video: "Видео",
};

export const adFormSchema = z.object({
  title: z
    .string()
    .refine((value) => hasLetterWords(value), "Обязательное поле. Не должно быть только цифры или артикулов"),
  condition: z.enum(["new", "used"]),
  type: z.enum(["personal", "resale"], { message: "Обязательное поле" }),
  description: z.string().min(1, "Обязательное поле"),
  price: z.string().min(1, "Обязательное поле").regex(/^\d+$/, "Поле должно содержать только цифры"),
  images: z
    .array(z.instanceof(File), { message: "Обязательное поле" })
    .min(1, "Должна быть прикреплена хотя бы 1 фотография"),
  video: z
    .string()
    .refine(
      (value) => value.indexOf("http") === 0 && value.includes("/") && value.includes("."),
      "Введите корректную ссылку"
    ),
  city: z.string().min(1, "Обязательное поле"),
  phone: z.string().min(11, "Обязательное поле").regex(/^\d+$/, "Введите корректный телефон"),
  connection: z.enum(["online", "meet"], { message: "Обязательное поле" }),
});

export const cities: ControlItem[] = [
  { label: "Выберите город", value: "" },
  { label: "Москва", value: "moscow" },
  { label: "Санкт-Петербург", value: "spb" },
  { label: "Екатеринбург", value: "ekb" },
  { label: "Казань", value: "kazan" },
  { label: "Краснодар", value: "krasnodar" },
];

export const adTypes: ControlItem[] = [
  { label: "Выберите вид", value: "" },
  { label: "Покупал для себя", value: "personal" },
  { label: "Покупал для перепродажи", value: "resale" },
];

export const connections: ControlItem[] = [
  { label: "Выберите способ связи", value: "" },
  { label: "Звонки и сообщения", value: "online" },
  { label: "Встреча", value: "meet" },
];

export const conditions: ControlItem[] = [
  { label: "Новое", value: "new" },
  { label: "Б/У", value: "used" },
];
