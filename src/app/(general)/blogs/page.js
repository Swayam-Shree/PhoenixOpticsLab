"use client";

import { collection } from "firebase/firestore";
import { db } from "@/app/firebase";
import { useCollection } from "react-firebase-hooks/firestore" ;

import BlogDisplay from "../../../components/BlogDisplay";

export default function Blogs() {
	const [value, loading, error] = useCollection(collection(db, "blogs"));
	if (loading) {
		return (<div>Loading...</div>);
	} else if (error) {
		return (<div>Error. Please refresh.</div>);
	}

	let data = value.docs.map(doc => doc.data());

	console.log(data);

	let jsx = data.map((val) => {
		return <BlogDisplay date={val.date} title={val.title} author={val.author} content={val.content} />
	});

	return (<div className="flex flex-col">
		{ jsx }
	</div>);
}