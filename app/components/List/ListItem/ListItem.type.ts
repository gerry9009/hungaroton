export interface ListItemProps {
  title: string;
  imgUrl?: string;
  ContentComponent?: React.ElementType;
  buttonConfig?: {
    value: string;
    onClick: () => void;
  };
}
