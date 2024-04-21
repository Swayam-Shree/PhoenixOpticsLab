"use client";

import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, addDoc } from "firebase/firestore";

import { useState } from "react";

import { useRouter } from "next/navigation";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

let blogCollection = collection(db, "blogs");

export default function Dashboard() {
	const router = useRouter();
	const [user, authLoading, authError] = useAuthState(auth);

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	async function handleSubmit() {
		await addDoc(blogCollection, {
			title: title,
			content: content,
			author: user.displayName,
			date: new Date().toISOString().slice(0, 10)
		});

		setTitle("");
		setContent("");
	}

	if (user) {
		return (<div className="flex flex-col items-center gap-[10px]">
			<div>
				createBlog, @app/(auth)/createBlog/page.js
			</div>
			<Button onClick={() => {router.push("/dashboard");}} variant="outlined">Dashboard</Button>

			<TextField onChange={(e) => {setTitle(e.target.value);}} value={title} label="Title" variant="outlined" />
			<TextField onChange={(e) => {setContent(e.target.value);}} value={content}  multiline label="Content" variant="outlined" />

			<Button onClick={handleSubmit} variant="outlined">Create Blog</Button>
		</div>)
	} else if (authLoading) {
		return (<div>Loading...</div>);
	} else if (authError) {
		return (<div>Error</div>);
	} else {
		router.push("/");
	}
}