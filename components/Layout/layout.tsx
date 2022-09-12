import type { NextPage } from "next";
import { Main } from "./layout.style";
import Navbar from "./../Navbar/navbar";

interface Props {
  children: React.ReactNode;
  theme: string;
  toggleTheme: () => void;
}

const Layout: NextPage<Props> = ({ children, theme, toggleTheme }) => {
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
