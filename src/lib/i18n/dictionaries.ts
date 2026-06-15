import type { Locale } from "./config";

const dictionaries = {
  ja: () => import("./dictionaries/ja.json", { with: { type: "json" } }).then((module) => module.default),
  en: () => import("./dictionaries/en.json", { with: { type: "json" } }).then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
