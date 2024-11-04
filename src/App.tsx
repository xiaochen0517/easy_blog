import TopBar from "@/components/layout/TopBar.tsx";
import {Outlet} from "react-router-dom";
import BottomBar from "@/components/layout/BottomBar.tsx";
import {useAppSelector} from "@/stores/hooks.ts";
import yaml from "js-yaml";
import {ConfigState, updateConfig} from "@/stores/ConfigSlice.ts";
import {store} from "@/stores";

function App() {

  initConfig();

  const siteTitle = useAppSelector(state => state.config.title);
  console.log("siteTitle", siteTitle);
  window.document.title = siteTitle;

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <TopBar/>
      <div className="relative w-full flex-1">
        <div className="absolute w-full h-full flex flex-col">
          <div className="w-full max-w-6xl flex-1 mx-auto">
            <Outlet/>
          </div>
          <BottomBar/>
        </div>
      </div>
    </div>
  )
}

export interface ConfigYaml {
  easy_blog: ConfigState
}

function initConfig() {
  fetch("/config.yml")
    .then(response => response.text())
    .then(text => {
      const config = yaml.load(text) as ConfigYaml;
      console.log("Loaded config.yml", config.easy_blog);
      store.dispatch(updateConfig(config.easy_blog));
    })
    .catch(error => {
      console.error("Failed to load config.yml", error);
    })
}

export default App
