import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Row, Col, Form, Label, Input, FormGroup, Button } from "reactstrap";
import nextImage from "../../img/next2.png";
import "../../styles/question.scss";
import { Link } from "react-router-dom";

export const Question = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mt-5" id="divquest">
			<Row>
				<Col xs="3" />

				<Col xs="6" className="mt-4">
					<div>
						<p className="text-center" id="centrado">
							Razonamiento Matematico!
						</p>
					</div>
					<div className="content text-center" id="frases">
						<div className="texto-encima">
							<p className="centrado" id="centrado">
								<i className="far fa-comment" id="icono" style={{ fontSize: 150 }} />
								«Existe el mañana por alguna razón.»
							</p>
						</div>
					</div>
					<br />
					<div>
						<p className="text-center">
							En una caja, se tiene 200 canicas de color verde, 200 de color rojo, 200 de color azul, 200
							de color negro y 250 de color amarillo. ¿Cuál es el menor número de canicas que se debe
							extraer al azar para tener, con certeza, al menos 100 canicas del mismo color?{" "}
						</p>
					</div>
					<Form>
						<FormGroup>
							<h3>Respuesta</h3>
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									name="flexRadioDefault"
									id="flexRadioDefault1"
								/>
								<Label className="form-check-label" for="flexRadioDefault1">
									{" "}
									A - 497
								</Label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									name="flexRadioDefault"
									id="flexRadioDefault2"
								/>
								<Label className="form-check-label" for="flexRadioDefault2">
									{" "}
									B - 498
								</Label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									name="flexRadioDefault"
									id="flexRadioDefault3"
								/>
								<Label className="form-check-label" for="flexRadioDefault3">
									{" "}
									C - 495
								</Label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									name="flexRadioDefault"
									id="flexRadioDefault4"
								/>
								<Label className="form-check-label" for="flexRadioDefault4">
									{" "}
									D - 496
								</Label>
							</div>
						</FormGroup>
						<FormGroup>
							<div />
						</FormGroup>
						<div className="formulario__grupo formulario__formulario-error" id="formulario__error">
							<p className="message__error" id="message__error" style={{ margin: 0 }}>
								<i className="fas fa-exclamation-triangle" /> Error: Debe Marcar al menos una respuesta!
							</p>
						</div>
						<br />
						<div className="container-fluid text-center">
							<i className="fas fa-arrow-circle-right" style={{ fontSize: 60 }} />
						</div>
					</Form>
				</Col>
			</Row>
			<br />
			<br />
			<div className="text-center alert alert-info" id="alert_inf">
				{store.message || "Para dar por terminado el test, presiona "}
				<Link to="/">
					<Button className="btn btn-danger btn-lg" id="salirquest" style={{ marginTop: 4 }}>
						Salir
					</Button>
				</Link>
			</div>
		</div>
	);
};
