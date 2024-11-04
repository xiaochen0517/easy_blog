import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu.tsx";
import {Link, useNavigate} from "react-router-dom";
import ReactIcon from "@/assets/react.svg";

export default function TopBar() {

  const navigate = useNavigate();

  return (
    <div className="p-2 border-b">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <div className={navigationMenuTriggerStyle() + " cursor-pointer gap-2"} onClick={() => navigate("/docs")}>
              <img src={ReactIcon} alt="React" className="w-5 h-5"/>
              <span className="text-base font-bold">React</span>
            </div>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/docs" className={navigationMenuTriggerStyle()}>
              Documentation
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
