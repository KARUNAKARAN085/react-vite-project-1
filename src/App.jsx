import B from "./Componentes/B";
import { NameProvider } from "./contexts/NameContext";

const App = () => {

  return (
    <NameProvider>
      <B/>
    </NameProvider>
  )
}

export default App;