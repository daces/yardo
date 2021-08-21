import Head from "next/head";
import Link from "next/link";

import Layout from "@components/Layout";
import Container from "@components/Container";
import styles from "@styles/Home.module.css";

import products from "../../products.json";
export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Snipcart Store</title>
			</Head>
			<div>
				<h1 className={styles.events}>EVENTS & COURSES</h1>
				<p className={styles.events}>
					Arrive hungry. Leave satisfied. From workshops and gigs, to talks and
					parties, here’s what’s going on at Birch…
				</p>
			</div>
			<Container className={styles.homeContainer}>
				<div className={styles.grid} id="courses">
					{products.map((product) => {
						return (
							<div key={product.id} className={styles.card}>
								<span>{product.time}</span>
								<Link href={`/products/${product.id}`}>
									<a>
										<img src={product.image} alt={`Preview of ${product.title}`} />
										<div className={styles.info}>
											<h3>{product.title}</h3>
											<p className={styles.cardDescription}>{product.description}</p>
											<p className={styles.price}>${product.price}</p>

											<p>
												<button
													className="draga snipcart-add-item"
													data-item-id={product.id}
													data-item-image={product.image}
													data-item-name={product.title}
													data-item-url={`/products/${product.id}`}
													data-item-price={product.price}
												>
													Add to Cart
												</button>
											</p>
										</div>
									</a>
								</Link>
							</div>
						);
					})}
				</div>
			</Container>
		</Layout>
	);
}
