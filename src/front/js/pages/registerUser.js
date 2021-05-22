import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Row, Col, Form, Label, Input, FormGroup, Button } from "reactstrap";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../../styles/registeruser.scss";

export const RegisterUser = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [birth, setBirth] = useState("");
	const [gender, setGender] = useState("");
	const [correo, setCorreo] = useState("");
	let revisionEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const registrar = (name, password, birth, gender, correo) => {
		actions.postUser(name, password, birth, gender, correo);
		setTimeout(() => mensajeApi(), 2000);
	};
	const mensajeApi = () => {
		if (store.respuestaRegistro == 1) {
			const MySwal = withReactContent(Swal);
			MySwal.fire("Registrado Exitosamente").then(value => {
				window.location.href = "./";
			});
		} else {
			const MySwal = withReactContent(Swal);
			MySwal.fire("El usuario ya existe!").then(value => {
				window.location.href = "./";
			});
		}
	};
	const revision = (name, password, password2, birth, gender, correo) => {
		name.length < 1 || birth.length < 1
			? alert("Completa los campos faltantes")
			: password.length < 8
			? alert("La contraseña debe tener 8 caracteres mínimo")
			: password2 != password
			? alert("Las contraseñas deben coincidir")
			: revisionEmail.test(correo)
			? registrar(name, password, birth, gender, correo)
			: alert("Ingrese un correo electrónico valido");
	};
	useEffect(() => {
		actions.changeNav("principal");
	}, []);
	return (
		<div className="container-fluid p-3 Principal">
			<Row>
				<Col xs="3" />
				<Col xs="6">
					<h1 className="text-center">Registro de Usuario!</h1>
					<Form>
						<FormGroup>
							<Label>Nombre de Usuario</Label>
							<Input
								className="form-control"
								placeholder="Ingrese su nombre completo"
								type="text"
								name="nombre"
								value={name}
								onChange={e => setName(e.target.value)}
							/>
						</FormGroup>
						<FormGroup>
							<Label>Contraseña</Label>
							<Input
								type="password"
								name="password"
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</FormGroup>
						<FormGroup>
							<Label>Confirmar Contraseña</Label>
							<Input
								type="password"
								name="repeatPassword"
								value={password2}
								onChange={e => setPassword2(e.target.value)}
							/>
						</FormGroup>
						<FormGroup>
							<Label>Fecha de Nacimiento</Label>
							<Input type="date" name="edad" value={birth} onChange={e => setBirth(e.target.value)} />
						</FormGroup>
						<FormGroup>
							<Label>Sexo</Label>
							<Input
								type="select"
								name="select"
								id="SelectGender"
								value={gender}
								onChange={e => setGender(e.target.value)}>
								<option>Seleccione su Sexo</option>
								<option>Femenino</option>
								<option>Masculino</option>
							</Input>
						</FormGroup>
						<FormGroup>
							<Label>Correo Electrónico</Label>
							<Input
								placeholder="Correo Electronico"
								type="email"
								name="correo"
								value={correo}
								onChange={e => setCorreo(e.target.value)}
							/>
						</FormGroup>
						<br />
						<FormGroup>
							<Button
								color="danger"
								onClick={() => {
									revision(name, password, password2, birth, gender, correo);
								}}>
								Registrarse
							</Button>
						</FormGroup>
					</Form>
				</Col>
			</Row>
		</div>
	);
};
