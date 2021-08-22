import Nav from "../Nav";
import Footer from "../Footer";
import BasicSlider from "../basicSlider";
import styles from "./Layout.module.css";
import Intro from "@components/Intro/intro";
import Donate from "@components/Donate/donate";
import MapContact from "@components/MapContact/mapContact";

const Layout = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Nav />
			{/* <BasicSlider /> */}
			{/* <Intro /> */}
			{children}
			{/* <Donate /> */}
			<MapContact />
			<Footer />
		</div>
	);
};

export default Layout;
