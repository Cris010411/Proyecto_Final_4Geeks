import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Animado from "../../img/anime.gif";
import "../../styles/pregunta.scss";
import { Context } from "../store/appContext";
import { Radio } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Row, Col, Form, Label, Input, FormGroup, Button } from "reactstrap";
import PropTypes from "prop-types";

export const Preguntas = props => {
	const { store, actions } = useContext(Context);

	const handleChange = event => {
		actions.setEleccion(event.target.value);
		seleccionado();
	};

	const seleccionado = () => {
		actions.setcheck(true);
		actions.setDisplayAlert("none");
	};

	useEffect(() => {
		actions.setBotPregunta("block");
	}, []);
	return (
		<div className="container">
			<div className="row">
				<div className="col-3 text-left">
					<div className="container">
						<spam className="globo i abajo-derecha text-center ">{props.frase}</spam>
					</div>
					<img className="gif" src={Animado} />
				</div>

				<div className="col-9 mt-5 text-left">
					<div className="container">
						<h6 id="item">Pregunta {store.item}/5</h6>
						<p>{props.pregunta}</p>
						<div className="row mt-2">
							<div className="col-3 text-center "></div>
							<div className="col-9 text-left">
								<FormControl>
									<RadioGroup aria-label="Respuesta" value={store.eleccion} onChange={handleChange}>
										<FormControlLabel
											value={props.respuesta1}
											control={<Radio />}
											label={props.respuesta1}
										/>
										<FormControlLabel
											value={props.respuesta2}
											control={<Radio />}
											label={props.respuesta2}
										/>
										<FormControlLabel
											value={props.respuesta3}
											control={<Radio />}
											label={props.respuesta3}
										/>
										<FormControlLabel
											value={props.respuesta4}
											control={<Radio />}
											label={props.respuesta4}
										/>
									</RadioGroup>
								</FormControl>

								<div style={{ color: "red", display: store.stateAlert }}>
									<i className="fas fa-exclamation-triangle" /> Debe Marcar al menos una respuesta!
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
Preguntas.propTypes = {
	frase: PropTypes.string,
	pregunta: PropTypes.string,
	respuesta1: PropTypes.string,
	respuesta2: PropTypes.string,
	respuesta3: PropTypes.string,
	respuesta4: PropTypes.string
};
