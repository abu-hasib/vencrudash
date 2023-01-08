import { useState } from "react";
import "./App.css";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex">
      <Header {...{ isOpen, setOpen }} />
      <Sidebar isOpen={isOpen} />
    </div>
  );
}

export default App;
