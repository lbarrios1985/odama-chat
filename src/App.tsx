import React from "react";
import Chat from "./components/Chat";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Chat />
    </div>
  );
};

export default App;
