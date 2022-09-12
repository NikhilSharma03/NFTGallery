import type { NextPage } from "next";
import { Main } from "./layout.style";

interface Props {
  children: React.ReactNode;
  toggleTheme: () => void;
}

const Layout: NextPage<Props> = ({ children, toggleTheme }) => {
  return (
    <>
      <div onClick={toggleTheme}>NavBar</div>
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
