"use client";

import { Typography } from "@mui/material";
import { Layout, ListWrapper } from "./components";
import { MOCK_DATA } from "./mock/mock_data";

export default function Home() {
  return (
    <Layout.withHeader title="My App" footerString="Company">
      <ListWrapper title="My List">
        {MOCK_DATA.map((item, index) => (
          <ListWrapper.Item
            key={item.id}
            title={item.name}
            imgUrl={index % 2 === 0 ? item.portrait : undefined}
            ContentComponent={() => <Typography>{item.albumCount}</Typography>}
            buttonConfig={{
              value: "Részletek",
              onClick: () => alert("clikkkkkk"),
            }}
          />
        ))}
      </ListWrapper>
    </Layout.withHeader>
  );
}
