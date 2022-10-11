import { RouterProvider } from "react-router-dom";
import { route } from "./Router/Router";

function App() {
  return (
    <div>
      <RouterProvider router={route }></RouterProvider>
    </div>
  );
}

export default App;
