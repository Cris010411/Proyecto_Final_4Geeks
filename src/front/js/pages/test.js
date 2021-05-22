import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Preguntas } from "../component/preguntas";
import { Viewresultuser } from "../component/viewresultuser";

export const Test = () => {
	const { store, actions } = useContext(Context);
	const [mensajeBox, setmensajeBox] = useState("none");
	const [mensaje, setmensaje] = useState(true);

	const show = (vista, condicion, suma) => {
		let valorsuma = store.resultado;
		setmensajeBox(vista);
		setmensaje(condicion);
		valorsuma += suma;
		actions.setResultado(valorsuma);
	};

	const revisar = () => {
		if (store.check) {
			store.eleccion == store.cuestionario[store.aleatorioPregunta].option_correcta
				? show("block", true, 1)
				: show("block", false, 0);
			setTimeout(() => siguiente(), 1000);
		} else {
			actions.setDisplayAlert("block");
		}
	};
	const siguiente = () => {
		actions.setAleatorioPregunta(store.cuestionario.length);
		mezclaOpciones(store.aleatorioPregunta);
		show("none", true, 0);
		let conteo = store.item;
		conteo += 1;
		actions.changeitem(conteo);
		actions.setDisplayAlert("none");
		actions.setcheck(false);
	};
	const mezclaOpciones = id => {
		let opciones = [];
		opciones.push(store.cuestionario[id].option_correcta);
		opciones.push(store.cuestionario[id].option_mal1);
		opciones.push(store.cuestionario[id].option_mal2);
		opciones.push(store.cuestionario[id].option_mal3);
		actions.setopcionesAleatorias(opciones);
	};
	useEffect(() => {
		actions.changeNav("test");
		mezclaOpciones(store.aleatorioPregunta);
		actions.getName();
	}, []);
	return (
		<div className="container-fluid text-center p-3 Principal">
			<div className="row">
				<div className="col-4"></div>
				<div className="col-4">
					<h1>Prueba lógica</h1>
				</div>
				<div className="col-4">
					<div style={{ display: mensajeBox }}>
						{mensaje ? (
							<div className="alert alert-success" role="alert">
								Muy bien! <i className="fas fa-thumbs-up"></i>
							</div>
						) : (
							<div className="alert alert-danger" role="alert">
								Más Suerte en la proxima! <i className="fas fa-times-circle"></i>
							</div>
						)}
					</div>
				</div>
			</div>
			<div className="container-fluid">
				{store.item < 6 ? (
					<Preguntas
						frase={store.cuestionario[store.aleatorioPregunta].frase}
						pregunta={store.cuestionario[store.aleatorioPregunta].test_log}
						respuesta1={store.opcionesAleatorias[0]}
						respuesta2={store.opcionesAleatorias[1]}
						respuesta3={store.opcionesAleatorias[2]}
						respuesta4={store.opcionesAleatorias[3]}
					/>
				) : (
					<Viewresultuser />
				)}
			</div>
			<div className="mb-5" style={{ display: store.botPregunta }}>
				<i className="fas fa-arrow-circle-right" style={{ fontSize: 60 }} onClick={() => revisar()} />
				<h5>Siguiente</h5>
			</div>
		</div>
	);
};
