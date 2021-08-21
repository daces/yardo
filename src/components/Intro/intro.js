import React from "react";
import styles from "./Intro.module.css";
import img from "../../../public/images/dandelion.png";
const Intro = () => {
	return (
		<div style={{ backgroundImage: "url(" + img + ")" }} className={styles.intro}>
			<h2>Unique Wellness opportunities for Acton & Ealing</h2>
			<p>
				"Yardo is inspired by my experiences of community-centred culture in the
				early 1990’s Brixton; together we made fantastic things happen, addressing
				local problems creatively and collectively. I have noticed, when working
				collectively in places of possibility that life feels very worth living -
				even if you have been positioned on the bottom rung".
			</p>
		</div>
	);
};

export default Intro;
