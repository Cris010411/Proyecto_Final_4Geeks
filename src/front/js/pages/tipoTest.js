import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png";

import "../../styles/tipoTest.scss";

export const TipoTest = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.changeNav("interna");
	}, []);

	return (
		<div className="container-fluid text-center p-3 Principal">
			<div className="container mt-5 mb-5">
				<h1>Selecciona el tipo de prueba</h1>
				<div className="row mt-3 mb-5">
					<div className="col-6">
						<img className="mt-5" style={{ width: "10rem" }} src={logo} />
					</div>
					<div className="col-6 text-left p-5">
						<ul className="mt-3">
							<Link to="test">
								<li
									className="habilitado"
									onClick={() => actions.setAleatorioPregunta(store.cuestionario.length)}>
									Razonamiento lógico
								</li>
							</Link>
							<li className="Deshabilitado">Razonamiento abstracto</li>
							<li className="Deshabilitado">Razonamiento Matemático</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
