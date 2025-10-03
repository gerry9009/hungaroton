export enum FieldType {
  Text = "text",
  Search = "search",
  Select = "select",
}

export interface BaseField {
  name: string;
  label: string;
  type: FieldType;
  fullWidth?: boolean;
  defaultValue?: string | number | null;
}

export interface TextFieldConfig extends BaseField {
  type: FieldType.Text | FieldType.Search;
  defaultValue?: string;
}

export interface SelectFieldAllowEmpty extends BaseField {
  type: FieldType.Select;
  options: { label: string; value: string | number }[];
  allowEmpty: true;
  emptyOptionLabel: string;
  defaultValue?: string | number | null;
}

export interface SelectFieldNoEmpty extends BaseField {
  type: FieldType.Select;
  options: { label: string; value: string | number }[];
  allowEmpty?: false;
  emptyOptionLabel?: never;
  defaultValue?: string | number | null;
}

export type SelectFieldConfig = SelectFieldAllowEmpty | SelectFieldNoEmpty;

export type FormFieldConfig = TextFieldConfig | SelectFieldConfig;

export interface DynamicFormProps<
  T extends Record<string, unknown> = Record<string, unknown>
> {
  fields: FormFieldConfig[];
  onChange?: (values: T) => void;
}
