"use client";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { useRouter } from "next/navigation";

import Button from "@mui/material/Button";

export default function Dashboard() {
	const router = useRouter();
	const [user, authLoading, authError] = useAuthState(auth);

	if (user) {
		return (<div>
			<div>
				dashboard, @app/(auth)/dashboard/page.js
			</div>
			
			<Button onClick={() => {router.push("/createBlog");}} variant="outlined">Create Blog</Button>
			<Button onClick={() => {signOut(auth);}} variant="outlined">Sign Out</Button>
		</div>)
	} else if (authLoading) {
		return (<div>Loading...</div>);
	} else if (authError) {
		return (<div>Error</div>);
	} else {
		router.push("/");
	}
}