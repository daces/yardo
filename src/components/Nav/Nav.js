import Link from "next/link";

import { FaShoppingCart } from "react-icons/fa";

import Container from "../Container";

import styles from "./Nav.module.css";

const Nav = ({ children }) => {
	return (
		<nav className={styles.nav}>
			<Container className={styles.navContainer}>
				<p className={styles.title}>
					<Link href="/">
						<a>Yardo</a>
					</Link>
				</p>
				<span className={styles.menuItems}>
					<Link href="/">
						<a>Programes</a>
					</Link>
					<Link href="/about">
						<a>About</a>
					</Link>
				</span>
				<p className={styles.description}>
					<a
						className="snipcart-checkout snipcart-summary"
						href="#"
						style={{ textDecoration: "none" }}
					>
						<FaShoppingCart />
						<strong className="sr-only">Cart</strong>
						<span className="snipcart-total-price">$0.00</span>
					</a>
				</p>
			</Container>
		</nav>
	);
};

export default Nav;
