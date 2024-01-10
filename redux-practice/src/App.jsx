import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import increment from "./store/actions/increment";
import getImageViaApi from "./store/actions/getImage";
function App() {
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.points);
  const data = useSelector((state) => state.data.message);

  function onClick() {
    dispatch(getImageViaApi());
    dispatch(increment());
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <img
            style={{ height: "300px", width: "300px" }}
            src={data === null ? "" : data}
            alt="dog photo"
          />
        </div>
        <h2>This is your no. {pages} dog</h2>

        <button onClick={onClick}>GetData</button>
      </div>
    </>
  );
}

export default App;
