import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import styles from "./Home.module.css";

import tests from "../../db/db.json";

export default function Home() {
	let contador = 1;

	useEffect(() => {
		document.title = "VideoTests Greydive";
	}, []);

	return (
		<div className={styles.homeCont}>
			<h1>Selecciona un botón para comenzar un test</h1>
			<div className={styles.btnCont}>
				{tests &&
					tests.map((test, index) => {
						return (
							<Link to={`/test?id=${test.idVideo}`}>
								<button key={test.index} className={styles.homeBtn}>
									{`Test ${contador++}`}
								</button>
							</Link>
						);
					})}
			</div>
		</div>
	);
}
