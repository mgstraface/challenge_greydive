import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import styles from "../VideoTest/VideoTest.module.css";

import tests from "../../db/db.json";

export function VideoTest() {
	let contadorTareas = 1;
	const busqueda = useLocation().search;
	const idTest = new URLSearchParams(busqueda).get("id");

	let videoT = tests.find((test) => {
		return test.idVideo === idTest;
	});

	useEffect(() => {
		document.title = videoT.cliente.charAt(0).toUpperCase() + videoT.cliente.slice(1);
	}, [videoT.cliente]);

	return (
		<div className={styles.gralCont}>
			<div className={styles.dataCont}>
				<Link to="/">
					<button className={styles.homeBtn}>Volver</button>
				</Link>

				<h1>{videoT.cliente.charAt(0).toUpperCase() + videoT.cliente.slice(1)}</h1>
				<h3>Test: Test de usabilidad en el sitio web</h3>
				<h3>{videoT.plataforma}</h3>

				<CardMedia className={styles.video} component="iframe" src={videoT.linkVideo} />

				<h3>Transcripción</h3>

				<div className={styles.transcripcion}>
					<p
						dangerouslySetInnerHTML={{
							__html: videoT.transcripcion,
						}}
					/>
				</div>

				<h3>Tareas</h3>

				<p>{`Escenario: ${videoT.escenario}`}</p>
				{videoT.preguntas.map((tarea, index) => {
					return (
						<div className={styles.tareaCont} key={index}>
							<h5>{`Tarea ${contadorTareas++}:`}</h5>
							<div className={styles.tareaTexto}>
								<h5>{tarea.texto}</h5>
							</div>
							{tarea.respuesta && tarea.respuesta !== "respuesta verbal" && (
								<h2 className={styles.rta}>Respuesta: {tarea.respuesta}</h2>
							)}

							<h6>{`Duración de la tarea ${tarea.tiempo}`}</h6>
						</div>
					);
				})}
				<Link to="/">
					<button className={styles.homeBtn}>Volver</button>
				</Link>
			</div>
		</div>
	);
}
