import Body from "./components/Body";
import Header from "./components/Header";
import "./index.css";
import "../src/style.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchedVideos from "./components/SearchedVideos";
import { useSelector } from "react-redux";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/:keyword",
        element: <SearchedVideos />,
      },
    ],
  },
]);
function App() {
  const darkMode = useSelector((store) => store.DarkMode.darkMode);
  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
