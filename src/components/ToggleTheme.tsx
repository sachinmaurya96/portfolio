import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")} size="sm" variant="ghost" className=" justify-start rounded-full min-h-[30px] min-w-[30px]">
      <div className="flex gap-2 dark:hidden">
        <Moon className="size-5" />
      </div>
      <div className="dark:flex gap-2 hidden">
        <Sun className="size-5" />
      </div>
    </Button>
  );
};
