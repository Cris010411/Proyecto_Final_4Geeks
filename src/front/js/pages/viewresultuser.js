import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
//import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Row, Col, Form, Label, Input, FormGroup, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/viewresultuser.scss";
import portada from "../../img/portada.jpg";

export const Viewresultuser = () => {
	const { store, actions } = useContext(Context);
	//let nombre = aron;
	var notafinal = 80;
	var nota = [{ name: "Preguntas falladas según item evaludao", value: "Nota" }];

	var data = [
		{ id: 1, name: "Razonamineto logico", value: "2" },
		{ id: 2, name: "Razonamiento Matematico", value: "5" },
		{ id: 3, name: "Razonamiento Abstracto", value: "4" }
	];

	var result = [{ name: "Total de respuesta falladas", value: "11" }];

	return (
		<div className="mt-5" id="divviewresult">
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
								Preguntas malas
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
						<Link to="/">
							<Button className="btn btn-danger btn-lg" id="salirquest" style={{ marginTop: 4 }}>
								Regresar
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
