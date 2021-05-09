import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

import test from "../../img/test.jpg";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	//useEffect(() => {
	//	actions.changeNav("1");
	//});
	const redireccionTest = lugar => {
		if (lugar == "a") {
			return (window.location.href = "./pagina");
		} else {
			return (window.location.href = "./question");
		}
	};

	return (
		<div className="container mt-5">
			<h1 id="title">Bienvenido nombreUsuario!</h1>
			<div className="row mt-5 mb-5">
				<div id="home" className="col-6 opcion text-center" onClick={() => redireccionTest("a")}>
					<h1 className="textoGuia">Mi Perfil</h1>
				</div>
				<div id="test" className="col-6 opcion text-center" onClick={() => redireccionTest("b")}>
					<h1 className="textoGuia">Inicia una prueba</h1>
				</div>
			</div>
		</div>
	);
};
