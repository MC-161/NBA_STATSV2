import { useState, MouseEvent, KeyboardEvent, lazy, Suspense } from "react";
import logo from "../../assets/Logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Search, Link, Build, Close as CloseIcon } from "@mui/icons-material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NBALOGO from "@/assets/Nav/NbaLogo.png";
import ESPNLOGO from "@/assets/Nav/Espn.png";
import BRLOGO from "@/assets/Nav/BR.png";
import { Drawer, IconButton, List, ListItem } from "@mui/material";
import { Menu as MenuIcon } from "lucide-react";

// Lazy load components to improve initial load time
const Option = lazy(() => import("./Option"));
const NavItemCard = lazy(() => import("./NavItemCard"));
const LogoItem = lazy(() => import("./LogoItem"));

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: MouseEvent | KeyboardEvent) => {
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setMenuOpen(open);
    };

  const mobileMenu = (
    <div className="flex flex-col h-full bg-white/10 text-white p-4 backdrop-blur-md">
      <div className="flex justify-end">
        <IconButton onClick={toggleDrawer(false)} className="text-white">
          <CloseIcon className="text-white" fontSize="large" />
        </IconButton>
      </div>
      <div className="flex flex-col items-center flex-grow mt-4">
        <List className="text-white flex flex-col justify-center items-center gap-10">
          <div className="border-2 rounded-md w-96 flex justify-center bg-nav-search">
            <img className="w-32" src={logo} alt="Logo" />
          </div>
          <ListItem
            button
            className="flex flex-col justify-center items-center p-4 transition-transform transform hover:scale-105"
          >
            <div className="flex items-center gap-5">
              <Search fontSize="large" />
              <p className="text-xl font-semibold">Search</p>
            </div>
          </ListItem>
          <ListItem
            button
            className="flex flex-col justify-center items-center p-4 transition-transform transform hover:scale-105"
          >
            <div className="flex items-center gap-5">
              <Build fontSize="large" />
              <p className="text-xl font-semibold">Tools</p>
            </div>
          </ListItem>
          <ListItem
            button
            className="flex flex-col justify-center items-center p-4 transition-transform transform hover:scale-105"
          >
            <div className="flex items-center gap-5">
              <Link fontSize="large" />
              <p className="text-xl font-semibold">External</p>
            </div>
          </ListItem>
        </List>
      </div>
    </div>
  );

  return (
    <nav className="fixed top-0 z-50 w-full md:w-screen flex justify-center">
      <NavigationMenu className="absolute top-2 border-2 rounded-md backdrop-blur-md">
        <NavigationMenuList>
          <div className="flex justify-between items-center w-96 md:w-auto">
            <div className="flex items-center text-primary-main pr-4 pl-4">
              <img className="h-14" src={logo} alt="NBA Logo" />
              <p className="text-sm font-bold">NBA STATS</p>
            </div>
            <IconButton
              className="md:hidden text-white pr-3"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon className="md:hidden" color="white" />
            </IconButton>
          </div>
          <NavigationMenuItem className="hidden md:flex">
            <NavigationMenuTrigger className="font-semibold text-white bg-transparent mr-2">
              Search
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-3 md:w-[500px] md:grid-cols-[.75fr_1fr] h-fit">
                <div className="grid grid-cols-1 gap-1">
                  <Suspense fallback={<div>Loading...</div>}>
                    <Option
                      icon={PersonOutlineOutlinedIcon}
                      title="Player Search"
                      description="Find Players"
                    />
                    <Option
                      icon={PersonOutlineOutlinedIcon}
                      title="Team Search"
                      description="Find Teams"
                    />
                  </Suspense>
                </div>
                <li className="relative bg-nav-search bg-cover bg-center rounded-md">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md p-5 no-underline outline-none backdrop-blur-sm transition-shadow duration-300 hover:shadow-glow"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-sm font-medium text-white">
                        Search and View Stats
                      </div>
                      <p className="text-xs leading-tight text-white">
                        Search for players or teams above to view their detailed
                        statistics
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="hidden md:flex">
            <NavigationMenuTrigger className="font-semibold text-white bg-transparent mr-2">
              Tools
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[500px]">
                <div className="grid gap-3 p-3 md:w-[500px] md:grid-cols-[1fr_1fr] h-fit list-none">
                  <Suspense fallback={<div>Loading...</div>}>
                    <NavItemCard
                      title="AI Chatbot"
                      description="NBA AI Chatbot answers queries about NBA players and teams, providing quick and accurate basketball information."
                      bgClass="bg-AI-Chat"
                      href="/ai-chatbot"
                    />
                    <NavItemCard
                      title="AI Comparison Tool"
                      description="Compare AI players' performance, features, and specs, helping you choose the best AI solution."
                      bgClass="bg-AI-Compare"
                      href="/ai-comparison"
                    />
                  </Suspense>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="hidden md:flex">
            <NavigationMenuTrigger className="font-semibold text-white bg-transparent mr-2">
              External
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[500px]">
                <div className="grid gap-3 p-3 md:w-[500px] md:grid-cols-[1fr_1fr_1fr] h-fit list-none">
                  <Suspense fallback={<div>Loading...</div>}>
                    <LogoItem
                      src={NBALOGO}
                      alt="NBA Logo"
                      width="w-20"
                      href="https://www.nba.com"
                      border={true}
                    />
                    <LogoItem
                      src={BRLOGO}
                      alt="BR Logo"
                      width="w-32"
                      href="https://www.bleacherreport.com"
                      border={true}
                    />
                    <LogoItem
                      src={ESPNLOGO}
                      alt="ESPN Logo"
                      width="w-20"
                      href="https://www.espn.com"
                    />
                  </Suspense>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Drawer
        anchor="left"
        open={menuOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          style: {
            width: "100%",
            height: "100%",
            background: "transparent",
            color: "white",
            backdropFilter: "blur(10px)", // Added backdrop blur effect
          },
        }}
      >
        {mobileMenu}
      </Drawer>
    </nav>
  );
}