import { useEffect } from "react";
import { api } from "../src/services/api";

function App() {

  useEffect(() => {
    api.get('tasks').then(response => console.log(response.data))
  }, [])

  return (
    <div>
      
    </div>
  );
}

export default App;
