import { ListWrapper } from "./ListWrapper";
import { ListItem } from "./ListItem";

type TemplateListGroup = typeof ListWrapper & {
  Item: typeof ListItem;
};

const ListWrapperWithItem = ListWrapper as TemplateListGroup;
ListWrapperWithItem.Item = ListItem;

export { ListWrapperWithItem as ListWrapper };
