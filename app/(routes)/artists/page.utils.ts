import { FormFieldConfig } from "@/app/components";

export const generateHungarianAlphabetOptions = () => {
  const hungarianAlphabet = [
    "A",
    "Á",
    "B",
    "C",
    "D",
    "E",
    "É",
    "F",
    "G",
    "H",
    "I",
    "Í",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "Ó",
    "Ö",
    "Ő",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "Ú",
    "Ü",
    "Ű",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return hungarianAlphabet.map((letter) => ({
    label: letter,
    value: letter.toLowerCase(),
  }));
};

const getDefaultValue = (
  name: string,
  search: string,
  type: string,
  letter: string
) => {
  switch (name) {
    case "search":
      return search || undefined;
    case "type":
      return type || undefined;
    case "letter":
      return letter || undefined;
    default:
      return undefined;
  }
};

export const getFormFieldConfig = ({
  config,
  search,
  type,
  letter,
}: {
  config: FormFieldConfig[];
  search: string;
  type: string;
  letter: string;
}) => {
  return config.map((field) => ({
    ...field,
    defaultValue: getDefaultValue(field.name, search, type, letter),
  }));
};

export const shouldSetSearchFilters = (
  debouncedSearch: string | undefined,
  search: string | undefined
): boolean => {
  const normalizedDebounced = debouncedSearch || "";
  const normalizedSearch = search || "";

  return normalizedDebounced !== normalizedSearch;
};
