import Head from "next/head";
import Layout from "@components/Layout";
import styles from "@styles/About.module.css";
import { contextType } from "google-map-react";

export default function About() {
	return (
		<Layout id="about">
			<Head>
				<title>About yardo</title>
			</Head>
			<div className={styles.wrapper}>
				<div className={styles.innerWrapper}>
					<div className={styles.aboutContainer}>
						<h2 className={styles.aboutIntro}>Who are we?</h2>
						<p className={styles.aboutMessage}>
							Yardo is a newly-formed community development organisation that offers
							counselling and mindfulness courses and meditation groups to help bring
							people together and provide the space for community healing.
						</p>
					</div>

					<div className={styles.wrap}>
						<div className={styles.img}>
							<img src="/images/about/cman.png" alt="founder" />
						</div>
						<div className={styles.content}>
							<h2 className={styles.person}>PAULA WATSON, FRSA</h2>
							<p className={styles.who}>
								<br />
								Psychotherapeutic Counsellor & Community Organiser
							</p>
							<p className={styles.about}>
								"Yardo is inspired by my experiences of community-centred culture in the
								early 1990’s Brixton; together we made fantastic things happen,
								addressing local problems creatively and collectively. I have noticed,
								when working collectively in places of possibility that life feels very
								worth living - even if you have been positioned on the bottom rung".
							</p>
						</div>
					</div>

					<div className={styles.wrap}>
						<div className={styles.content}>
							<h2 className={styles.person}>HELEN FIRMINGER</h2>
							<p className={styles.who}>
								<br />
								Charity and Community Consultant
							</p>
							<p className={styles.about}>
								Paula and Helen are long-time collaborators. The Mental Wealth
								Programme* is a funded six-month pilot programme offering both online
								and venue-based programmes and resources for community and personal
								development, especially during this time of Covid-19. <br /> <br />
								Our aim is not only to offer mental-health support during these
								unprecedented times, but also to create meaningful opportunities for
								local friendship and collaborations. ​ <br /> <br />* The Mental Wealth
								Pilot is funded by Green & Co. Charity.
							</p>
						</div>
						<div className={styles.img}>
							<img src="/images/about/cman.png" alt="founder" />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
