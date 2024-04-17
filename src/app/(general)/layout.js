import { Work_Sans } from "next/font/google";

import "../globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Link from "next/link";
import Image from "next/image";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
	title: "Optics Lab"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={workSans.className}>
				<nav className="flex justify-around bg-navbar-blue text-white min-h-[4em] items-center">
					<p className="text-[32px] ">OPTICAL</p>
					<div className="flex gap-[15px] justify-between">
						<Link href="/">Home</Link>
						<Link href="/about">About us</Link>
						<Link href="/projects">Projects</Link>
						<Link href="/projects">Equipments</Link>
						<Link href="/projects">Publications</Link>
						<Link href="/projects">Members</Link>
					</div>
					<div className="bg-white text-navbar-blue px-[24px] py-[8px] rounded-full">
						Contact us
					</div>
				</nav>
				<main>
					{children}
				</main>
				<footer className="bg-[#1F2B6C] text-[#BFD2F8] grid grid-row-[2fr_1fr] px-[8em] py-[4em]">
					<div className="grid grid-cols-4 gap-[2em]">
						<div>
							<p className="font-bold text-3xl mb-[0.5em]">OPTICAL</p>
							<p>lorem ipsum dolor sit amet</p>
						</div>
						<div>
							<p className="mb-[1em] text-xl">Important Links</p>
							<div className="flex flex-col">
								<Link href="">Equipments</Link>
								<Link href="">Publications</Link>
								<Link href="">Projects</Link>
								<Link href="">Members</Link>
							</div>
						</div>
						<div>
							<p className="mb-[1em] text-xl">Contact Us</p>
							<p>Call: +91 1234567890</p>
							<p>Email: someemail@gmail.com</p>
							<p>Address: Some address</p>
						</div>
						<div>
							<p className="mb-[1em] text-xl">Newsletter</p>
							<div className="bg-[#BFD2F8] text-[#1F2B6C] rounded p-[8px] flex gap-[20px] h-[48px] items-center">
								<p>Your email address</p>
								<Image src="/sendarrow.svg" width={20} height={20} alt="arrow" />
							</div>
						</div>
					</div>
					<hr className="h-[1px] my-[3em] bg-[#BFD2F8] border-0" />
					<div className="flex justify-between">
						<p>© 2024 All rights reserved by BITS Pilani</p>
						<div className="flex gap-[12px]">
							<Image src="/linkedin.svg" width={24} height={24} alt="twitter" />
							<Image src="/facebook.svg" width={24} height={24} alt="facebook" />
							<Image src="/instagram.svg" width={24} height={24} alt="instagram" />
						</div>
					</div>
				</footer>
			</body>
		</html>
	);
}
