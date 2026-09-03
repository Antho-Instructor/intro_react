interface HelloProps {
	name: string;
	isTrainer: boolean;
	age?: number; // age?: numbre, le ? signifie que la prop est optionnelle, donc on peut l'utiliser ou pas
}

function Hello(props: HelloProps) {
	console.log(props);

	/*
    
	console.log(props);

    {
        "name": "Anthony",
        "age": 34,
        "isTrainer": true
    }

    Props, est un obj, et pour acceder à ses valeurs, on peut soit utiliser la notation pointée (props.name, props.age, props.isTrainer), soit utiliser la déstructuration (const { name, age, isTrainer } = props;).

    */

	return (
		<>
			<h1>
				Hello {props.name},{" "}
				{props.isTrainer
					? "tu es un formateur"
					: "tu n'es pas un formateur"}
			</h1>
			<button>Hello !</button>
		</>
	);
}

export default Hello;
