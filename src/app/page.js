"use client";

import { useRouter } from "next/navigation";

import Button from "@mui/material/Button";

export default function Home() {
	const router = useRouter();

	return (<div>
		<div>
			home page
		</div>

		<Button	onClick={ () => {router.push("/login");} } variant="outlined">Login</Button>
	</div>);
}
