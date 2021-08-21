import React from "react";
import styles from "./MapContact.module.css";

const MapContact = (props) => {
	return (
		<div className={styles.mapContainer}>
			{/* <iframe
				src="https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyBgKzM7ULzXExCH3Ua7Ar9h603cOLtTZFE&center=47.618195888408515,-122.31900999829426&zoom=14&format=png&maptype=roadmap&style=feature:administrative%7Celement:geometry%7Cvisibility:off&style=feature:poi%7Cvisibility:off&style=feature:road%7Celement:labels.icon%7Cvisibility:off&style=feature:transit%7Cvisibility:off&size=480x360"
				width="100%"
				height="600"
				style={{ border: 0 }}
				allowfullscreen=""
				loading="lazy"
			></iframe> */}
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.8636473496546!2d-0.2719826891379395!3d51.5018792732227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760f17da0f6697%3A0xd245e94fd7eb8e68!2sActon%20Gardens%20Community%20Centre!5e0!3m2!1sen!2suk!4v1629227287019!5m2!1sen!2suk"
				width="100%"
				height="600"
				style={{ border: 0 }}
				allowFullScreen=""
				loading="lazy"
			></iframe>

			<div className={styles.donateWrap}>
				<div className={styles.donate}>
					<div className={(styles.donateCard, styles.donateCardFirst)}>
						<h1>Meet Us</h1>
						<p>
							"Yardo is inspired by my experiences of community-centred culture in the
							early 1990’s Brixton; together we made fantastic things happen,
							addressing local problems creatively and collectively.{" "}
						</p>

						<p>
							<b>London</b>
						</p>
						<p>Bollo Bridge Road</p>
						<p>W3 8UU</p>
					</div>
					<div className={styles.donateCard}>
						<div className={styles.mapContactWrap}>
							<div className={styles.mapForm}>
								<div className={styles.mapFormName}>
									<label htmlFor="name">Name</label>
									<input type="text" name="name" id="name"></input>
								</div>
								<div className={styles.Email}>
									<label htmlFor="email">Email</label>
									<input type="text" name="email" id="email"></input>
								</div>
								<div className={styles.Message}>
									<label htmlFor="message">Message</label>
									<textarea rows={6} type="text" name="message" id="message"></textarea>
								</div>
								<button>Send message</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default MapContact;
