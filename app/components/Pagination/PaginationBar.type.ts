export interface PaginationBarProps {
  count: number | undefined;
  page: number;
  disabled: boolean;
  onChange: (ChangeEvent: React.ChangeEvent<unknown>, value: number) => void;
}
