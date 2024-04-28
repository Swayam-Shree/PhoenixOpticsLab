"use client";

import { doc } from "firebase/firestore";
import { db } from "@/app/firebase";
import { useDocument } from "react-firebase-hooks/firestore";

export default function Page({ params }) {
	let document = doc(db, "blogs", params.blogId)
	const [value, loading, error] = useDocument(document);

	if (loading) {
		return (<div>Loading...</div>);
	} else if (error) {
		return (<div>Error. Please refresh.</div>);
	}

	return <div>{JSON.stringify(value.data())}</div>
}