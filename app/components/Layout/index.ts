import { BaseLayout } from "./BaseLayout";
import { WithHeader } from "./withHeader";

type LayoutType = typeof BaseLayout & {
  withHeader: typeof WithHeader;
};

const Layout = BaseLayout as LayoutType;
Layout.withHeader = WithHeader;

export { Layout };
export default Layout;
