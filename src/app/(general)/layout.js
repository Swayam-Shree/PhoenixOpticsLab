import { Inter } from "next/font/google";

import "../globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Optics Lab"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<nav>
					common nav to all general pages, @app/(general)/layout.js
				</nav>
				<main>
					{children}
				</main>
				<footer>
					common footer to all general pages, @app/(general)/layout.js
				</footer>
			</body>
		</html>
	);
}
