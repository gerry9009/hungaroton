import { ArtistsType } from "@/app/services";
import { FieldType, FormFieldConfig } from "@/app/components";

import { FieldNames } from "./page.types";
import { generateHungarianAlphabetOptions } from "./page.utils";
import { CONTENT_TEXTS } from "@/app/constants";

export const formConfig: FormFieldConfig[] = [
  {
    name: FieldNames.search,
    label: CONTENT_TEXTS.artists.form.searchLabel,
    type: FieldType.Search,
  },
  {
    name: FieldNames.type,
    label: CONTENT_TEXTS.artists.form.typeLabel,
    type: FieldType.Select,
    allowEmpty: true,
    emptyOptionLabel: CONTENT_TEXTS.artists.form.typeEmptyOption,
    options: [
      {
        label: CONTENT_TEXTS.artists.form.label_composer,
        value: ArtistsType.composer,
      },
      {
        label: CONTENT_TEXTS.artists.form.label_performer,
        value: ArtistsType.performer,
      },
      {
        label: CONTENT_TEXTS.artists.form.label_primary,
        value: ArtistsType.primary,
      },
    ],
  },
  {
    name: FieldNames.letter,
    label: CONTENT_TEXTS.artists.form.letterLabel,
    type: FieldType.Select,
    allowEmpty: true,
    emptyOptionLabel: CONTENT_TEXTS.artists.form.typeEmptyOption,
    options: generateHungarianAlphabetOptions(),
  },
];
