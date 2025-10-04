export enum FieldType {
  Text = "text",
  Search = "search",
  Select = "select",
}

export type FormValue = string | number | null;
export type FormValues = Record<string, FormValue>;

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface BaseField {
  name: string;
  label: string;
  type: FieldType;
  fullWidth?: boolean;
  defaultValue?: FormValue;
}

export interface TextFieldConfig extends BaseField {
  type: FieldType.Text | FieldType.Search;
  defaultValue?: string;
}

export interface SelectFieldAllowEmpty extends BaseField {
  type: FieldType.Select;
  options: SelectOption[];
  allowEmpty: true;
  emptyOptionLabel: string;
  defaultValue?: FormValue;
}

export interface SelectFieldNoEmpty extends BaseField {
  type: FieldType.Select;
  options: SelectOption[];
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
