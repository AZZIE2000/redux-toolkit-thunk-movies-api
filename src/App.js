import Store from "./app/Store";
import { Provider } from "react-redux";
import Movies from "./Movies";

function App() {
  return (
    <>
      <Provider store={Store}>
        <Movies />
      </Provider>
    </>
  );
}

export default App;
