import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Row, Col, Form, Label, Input, FormGroup, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/viewresultuser.scss";

export const Viewresultuser = () => {
	const { store, actions } = useContext(Context);

	const estadisticas = dato => {
		let calificacion = dato * 20;
		let intentos = store.currentUser.cant_question;
		let historia = store.currentUser.nota_alta;
		intentos += 1;
		historia >= calificacion ? actions.updateUser(intentos, historia) : actions.updateUser(intentos, calificacion);
	};

	var notafinal = store.resultado * 20;
	var nota = [{ name: "Preguntas falladas según item evaludao", value: "Nota" }];
	var data = [{ id: 1, name: "Razonamiento logico", value: store.resultado }];

	useEffect(() => {
		actions.changeNav("");
		actions.setBotPregunta("none");
		estadisticas(store.resultado);
	}, []);

	return (
		<div>
			<Row>
				<Col xs="3" />

				<Col xs="6" className="mt-4">
					<div className="container">
						<p className="text-center" id="centrado">
							<h3>Resultados</h3>
						</p>
					</div>
					<br />
					<div>
						<BootstrapTable
							className="table-info table-bordered rounded-lg"
							data={data}
							striped
							bordered
							hover
							style={{ border: 5 }}>
							<TableHeaderColumn className="rounded-pill" isKey dataField="id">
								item
							</TableHeaderColumn>
							<TableHeaderColumn className="text-center rounded-pill" dataField="name">
								Tipo de test
							</TableHeaderColumn>
							<TableHeaderColumn className="text-center rounded-pill" dataField="value">
								Preguntas Correctas
							</TableHeaderColumn>
						</BootstrapTable>
					</div>
					<div>
						<ReactBootStrap.Table className="table-info table-bordered rounded-lg" id="reacttable">
							<thead>
								<tr>
									<th>Nota final</th>
									<th>{notafinal}</th>
								</tr>
							</thead>
						</ReactBootStrap.Table>
					</div>
					<div className="text-center">
						<h4>{store.message || "Haz completado con éxito el test   "}</h4>
					</div>
					<br />
					<div className="text-center">
						<Link to="/demo">
							<Button className="btn btn-danger btn-lg" id="salirquest" style={{ marginTop: 4 }}>
								Salir
							</Button>
						</Link>
					</div>
				</Col>
			</Row>
			<br />
			<br />
		</div>
	);
};
