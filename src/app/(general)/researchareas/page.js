"use client";

import { collection } from "firebase/firestore";
import { db } from "@/app/firebase";
import { useCollection } from "react-firebase-hooks/firestore" ;

import TwoDataDisplay from "@/components/TwoDataDisplay";

export default function Blogs() {
	const [value, loading, error] = useCollection(collection(db, "researchareas"));
	if (loading) {
		return (<div>Loading...</div>);
	} else if (error) {
		return (<div>Error. Please refresh.</div>);
	}

	let data = value.docs.map(doc => doc.data());

	let jsx = data.map((val) => {
		return <TwoDataDisplay title={val.title} content={val.details} />
	});

	return (<div className="flex flex-col">
		{ jsx }
	</div>);
}