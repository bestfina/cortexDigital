type URL = string;
type Image = string;

export interface BaseEntity {
  id: number;
  title: string;
}

export type TLink = BaseEntity & {
  url: URL;
  subMenu?: { id: number; title: string; url: URL }[];
};

interface Description {
  subject: string;
  text: string;
}

export type TCase = BaseEntity & {
  poster: string;
  url: URL;
  category: string;
  description: string;
};

export type TAdvantages = BaseEntity & {
  icon: Image;
  description: string;
};

export type TFaq = BaseEntity & {
  description: Description[];
};

export type TService = BaseEntity & {
  icon: Image;
  url: URL;
  description: string;
  price: string;
};

export type TFeedbacks = {
  id: number;
  name: string;
  avatar: string;
  poster: string;
  video?: [string, string];
};

export type TFields = {
  id: number;
  type: string;
  placeholder: string;
};

export type TAboutInNumber = BaseEntity & {
  count: number;
  text: string;
};

export type TSteps = BaseEntity & {
  icon: Image;
  description: string;
};

export type TLocales = "ru" | "en";

export type Team = {
  id: number;
  img: Image;
};
