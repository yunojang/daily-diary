import { useEffect } from "react";

function App() {
  useEffect(() => {
    const getToday = (now) => {};

    const today = getToday(new Date());
  }, []);

  return (
    <div className="App">
      <div></div>
    </div>
  );
}

export default App;
