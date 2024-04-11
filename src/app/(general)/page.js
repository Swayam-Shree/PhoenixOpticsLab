"use client";

import { useRouter } from "next/navigation";

import Button from "@mui/material/Button";

import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
	const router = useRouter();
	const [user, authLoading, authError] = useAuthState(auth);

	if (user) {
		router.push("/dashboard");
	} else if (authLoading) {
		return (<div>Loading...</div>);
	} else if (authError) {
		return (<div>Error</div>);
	} else {
		return (<div>
			<div>
				home/landing page, @app/(general)/page.js
			</div>

			<Button	onClick={ () => {router.push("/services");} } variant="outlined">services</Button>
			<Button	onClick={ () => {router.push("/projects");} } variant="outlined">projects</Button>
			<Button	onClick={ () => {router.push("/researchareas");} } variant="outlined">researchareas</Button>
			<Button	onClick={ () => {router.push("/login");} } variant="outlined">Login</Button>
		</div>);
	}
}
