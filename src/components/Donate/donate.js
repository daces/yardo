import React from "react";
import styles from "./Donate.module.css";

const Donate = () => {
	return (
		<div className={styles.donateWrap}>
			<div className={styles.donate}>
				<div className={(styles.donateCard, styles.donateCardFirst)}>
					<img src="./images/1.png" alt="donate" />
				</div>
				<div className={styles.donateCard}>
					<h3>
						Care about mental health and social justice? Want to help tackle the
						growing problem of social isolation within our communities?
					</h3>
					<p>
						With £5500 we can support up to 15 people to access our counselling and
						mindfulness courses and meditation groups, helping to challenge the
						growing isolation and mental health crisis exacerbated by the pandemic.
					</p>
					<button>
						<a href="https://www.gofundme.com/f/yardo-digital-inclusion-fund">
							Donate
						</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Donate;
