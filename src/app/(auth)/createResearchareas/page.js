"use client";

import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, addDoc } from "firebase/firestore";

import { useState } from "react";

import { useRouter } from "next/navigation";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";

let researchAreasCollection = collection(db, "researchareas");

export default function Dashboard() {
	const router = useRouter();
	const [user, authLoading, authError] = useAuthState(auth);

	const [title, setTitle] = useState("");
	const [details, setDetails] = useState("");

	const [uploading, setUploading] = useState(false);

	async function handleSubmit() {
		setUploading(true);

		await addDoc(researchAreasCollection, {
			title: title,
			details: details,
		});

		setUploading(false);

		setTitle("");
		setDetails("");
	}

	if (user) {
		return (<div className="flex flex-col items-center gap-[10px]">
			<div>
				createBlog, @app/(auth)/createBlog/page.js
			</div>
			<Button onClick={() => {router.push("/dashboard");}} variant="outlined">Dashboard</Button>

			<TextField onChange={(e) => {setTitle(e.target.value);}} value={title} label="Title" variant="outlined" />
			<TextField onChange={(e) => {setDetails(e.target.value);}} value={details}  multiline label="Details" variant="outlined" />

			<Button onClick={handleSubmit} variant="outlined">Create Research Area</Button>

			{uploading && <CircularProgress />}
		</div>)
	} else if (authLoading) {
		return (<div>Loading...</div>);
	} else if (authError) {
		return (<div>Error</div>);
	} else {
		router.push("/");
	}
}