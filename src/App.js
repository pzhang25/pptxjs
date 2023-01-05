import logo from "./logo.svg";
import "./App.css";

import pptxgen from "pptxgenjs";

function App() {
  const genPPTx = () => {
    let pptx = new pptxgen();

    let slide = pptx.addSlide();

    slide.addImage({ path: "http://localhost:3000/images/Landscape_6.jpg", w: 6, h: 4, x: 0.5, y: 0.5 });

    pptx.writeFile({ fileName: "react-demo.pptx" });
  };

  return (
    <div className="App">
      <button onClick={genPPTx}>Create a pptx</button>
    </div>
  );
}

export default App;
