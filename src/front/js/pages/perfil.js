import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { Context } from "../store/appContext";

import "../../styles/perfil.scss";

import foto from "../../img/perfil.jpg";

export const Perfil = () => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);
	const confirmado = () => {
		actions.delUsuario();
		actions.reset();
		setTimeout(() => (window.location.href = "./"), 2000);
	};

	useEffect(() => {
		actions.changeNav("interna");
		actions.getName();
	}, []);

	return (
		<div className="container-fluid text-center p-3 Principal">
			<div className="text-center mt-1 mb-5">
				<div className="caja container ">
					<div className="row">
						<div className="col-lg-12  mt-3">
							<div>
								<div>
									<div>
										<img id="avatar" src={foto} />
										<h4>{store.currentUser.name}</h4>
									</div>
								</div>

								<div className="data">
									<ul className="list-unstyled">
										<li>
											<p>
												<strong className="datos">Correo:</strong>{" "}
												<span>{store.currentUser.email}</span>
											</p>
										</li>
										<li>
											<p>
												<strong className="datos">Fecha de Nacimiento:</strong>{" "}
												<span>{store.currentUser.birthday}</span>
											</p>
										</li>
										<li>
											<p>
												<strong className="datos">Genero:</strong>{" "}
												<span>{store.currentUser.gender}</span>
											</p>
										</li>
										<li>
											<p>
												<strong className="datos">Total de pruebas realizadas:</strong>{" "}
												<span>{store.currentUser.cant_question}</span>
											</p>
										</li>
										<li>
											<p>
												<strong className="datos">Nota más Alta:</strong>{" "}
												<span>{store.currentUser.nota_alta}</span>
											</p>
										</li>
									</ul>
								</div>
							</div>
							<div className="text-right">
								<Button variant="secondary" onClick={handleShow} size="sm">
									Eliminar mi Cuenta
								</Button>

								<Modal show={show} onHide={handleClose}>
									<Modal.Header>
										<Modal.Title>Confirmar eliminacion de cuenta</Modal.Title>
									</Modal.Header>
									<Modal.Body>Todos sus datos seran eliminados!</Modal.Body>
									<Modal.Footer>
										<Button variant="success" onClick={handleClose}>
											Cancelar
										</Button>
										<Button variant="danger" onClick={() => confirmado()}>
											Sí, Eliminar
										</Button>
									</Modal.Footer>
								</Modal>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
