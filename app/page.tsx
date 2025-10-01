import { Layout, ListWrapper } from "./components";
import { MOCK_DATA } from "./utils/mock_data";

export default function Home() {
  return (
    <Layout.withHeader title="My App" footerString="Company">
      <ListWrapper title="My List">
        {MOCK_DATA.map((item, index) => (
          <ListWrapper.Item
            key={item.id}
            text={item.name}
            imgUrl={index % 2 === 0 ? item.portrait : undefined}
          />
        ))}
      </ListWrapper>
    </Layout.withHeader>
  );
}
