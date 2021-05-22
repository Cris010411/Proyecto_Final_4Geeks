import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import TextInput from "react-autocomplete-input";
import { Accordion } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}
	function handleSubmit(event) {
		event.preventDefault();
	}
	const validacion = (email, password) => {
		actions.getUser(email, password);
		setTimeout(() => permitir(), 2000);
	};
	const permitir = () => {
		if (store.permitir === true) {
			actions.changeNav(true);
			window.location.href = "./demo";
		}
	};
	useEffect(() => {
		actions.changeNav("externa");
	}, []);
	return (
		<div className="container-fluid text-center p-3 Principal">
			<div className="container mb-5">
				<div className="row">
					<div id="info" className="col-8 mt-2 text-center p-5">
						<p className="text-break mt-5 descripción">
							FitMind es una aplicación web de ejercicios mentales, con procedimientos matemáticos,
							psicometricos y comprensión de lectura, que aun siendo rigurosos, son lo suficientemente
							sencillos para mejorar su capacidad de resolver problemas, útiles para diversos campos
							profesionales y estudiantiles.
						</p>
						<h3 className="mt-3 mb-2 beneficios">Beneficios</h3>
						<ul className="list-unstyled mt-2">
							<li>
								<p>Mayor conocimiento</p>
							</li>
							<li>
								<p>Comprensión de lectura</p>
							</li>
							<li>
								<p>Lógica - matemática</p>
							</li>
							<li>
								<p>Agilidad mental</p>
							</li>
						</ul>
					</div>
					<div className="col-4 text-center mt-5 login" style={{ color: "white" }}>
						<div className=" text-left">
							<h5 className="mt-3">
								<strong>Inicia sesión</strong>
							</h5>
							<Form className="mt-5" onSubmit={handleSubmit}>
								<Form.Group size="lg" controlId="email">
									<Form.Label>Email</Form.Label>
									<Form.Control
										autoFocus
										type="email"
										value={email}
										onChange={e => setEmail(e.target.value)}
									/>
								</Form.Group>
								<Form.Group size="lg" controlId="password">
									<Form.Label>Password</Form.Label>
									<Form.Control
										autoComplete="off"
										type="password"
										value={password}
										onChange={e => setPassword(e.target.value)}
									/>
									<br />
								</Form.Group>

								<button
									type="submit"
									className="btn btn-primary btn-lg btn-block"
									disabled={!validateForm()}
									onClick={() => validacion(email, password)}>
									Login
								</button>
								<br />
								<Link to="/recuperacion">
									<p className="mt-2" style={{ color: "blue" }}>
										Recuperar contraseña
									</p>
								</Link>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
