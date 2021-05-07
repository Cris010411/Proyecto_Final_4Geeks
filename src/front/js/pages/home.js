import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import portada from "../../img/portada.jpg";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	//useEffect(() => {
	//	actions.changeNav("2");
	//});

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}
	function handleSubmit(event) {
		event.preventDefault();
	}

	function ingreso() {
		return (window.location.href = "./viewresultuser");
	}
	return (
		<div className="container">
			<div className="row">
				<div className="col-8">
					<img className="img-fluid" src={portada} />
				</div>
				<div className="col-4 text-center mt-5" style={{ color: "white" }}>
					<div className="Login text-left">
						<h5 className="mt-3">
							<strong>Inicia sesión</strong>
						</h5>
						<Form className="mt-3" onSubmit={handleSubmit}>
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
									type="password"
									value={password}
									onChange={e => setPassword(e.target.value)}
								/>
							</Form.Group>
							<Link to="/viewresultuser">
								<Button
									block
									size="lg"
									type="submit"
									disabled={!validateForm()}
									onclick={() => ingreso()}>
									Login
								</Button>
							</Link>
							<Link to="/recuperacion">
								<a className="mt-2" href="#">
									Recuperar contraseña
								</a>
							</Link>
						</Form>
					</div>
				</div>
				<div id="info" className="col-12 text-center mt-3 mx-auto">
					<h3 className="mt-2">Biografía</h3>
					<p>
						FitMind es una aplicación web que le permite mejorar sus conocimientos en áreas
						lógico-matemáticos y de compresión de lectura a un nivel que, aun siendo riguroso, sea lo
						suficientemente sencillo. Con esto buscamos mejorar su capacidad para resolver problemas en
						procedimientos matemáticos, así como la comprensión de lectura que le serán útil para diversos
						campos profesionales y estudiantiles.
					</p>
				</div>
				<div id="info" className="col-12 text-center mt-3 mb-5 mx-auto">
					<h3 className="mt-2">Beneficios</h3>
					<ul className="list-group list-group-horizontal">
						<li className="list-group-item list-group-item-action list-group-item-secondary">
							Mayor conocimiento
						</li>
						<li className="list-group-item list-group-item-action list-group-item-secondary">
							Comprensión de lectura
						</li>
						<li className="list-group-item list-group-item-action list-group-item-secondary">
							Lógica - matemática
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
