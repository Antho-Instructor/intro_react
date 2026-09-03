import "./App.css";
import Hello from "./components/Hello";

function App() {
	return (
		<>
			{/* Ici, nous allons utiliser le composant Hello plusieurs fois 
        Ça nous permettra de voir comment les props fonctionnent et comment on peut réutiliser un composant avec des valeurs différentes
      */}
			<Hello name="Anthony" age={34} isTrainer />
			<Hello name="Geoffroy" isTrainer={false} />
			<Hello name="Nicolas" isTrainer={false} />
			<Hello name="toto" isTrainer={false} />
		</>
	);
}

export default App;
