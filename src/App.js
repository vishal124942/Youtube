import Body from "./components/Body";
import Header from "./components/Header";
import "./index.css";
import "../src/style.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchedVideos from "./components/SearchedVideos";

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
  return (
    <div className="App relative">
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
