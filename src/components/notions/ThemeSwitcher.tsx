import { useTheme } from "next-themes";
import Button from "./Button";
import Icon from "./Icon";


interface ThemeSwitcherProps {}

const ThemeSwitcher = ({}: ThemeSwitcherProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Icon icon="BiMoon" />  : <Icon icon="BiSun" />}
    </Button>
  );
};

export default ThemeSwitcher;
