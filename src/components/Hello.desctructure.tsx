interface HelloProps {
	name: string;
	isTrainer: boolean;
	age?: number; // Optional prop
}

function Hello({ name, isTrainer, age }: HelloProps) {
	return (
		<>
			<h1>
				Hello {name},{" "}
				{isTrainer ? "tu es un formateur" : "tu n'es pas un formateur"}
			</h1>
			<button>Hello !</button>
		</>
	);
}

export default Hello;
