"use client";

import { collection } from "firebase/firestore";
import { db } from "@/app/firebase";
import { useCollection } from "react-firebase-hooks/firestore";

import Image from "next/image";

import BlogDisplay from "../../../components/BlogDisplay";
import RecentPosts from "../../../components/RecentPosts";
import CategoryCard from "../../../components/CategoryCard";

export default function Blogs() {
	const [value, loading, error] = useCollection(collection(db, "blogs"));
	if (loading) {
		return <div>Loading...</div>;
	} else if (error) {
		return <div>Error. Please refresh.</div>;
	}

	let data = value.docs.map(doc => [doc.id, doc.data()]);

	let jsx = data.map((val) => {
		return <BlogDisplay id={val[0]} date={val[1].date} title={val[1].title} author={val[1].author} content={val[1].content} />
	});

	let recentPosts = data.slice(0, 3).map((val) => {
		return (
			<RecentPosts
				key={val[0]}
				id={val[0]}
				date={val[1].date}
				title={val[1].title}
				author={val[1].author}
				content={val[1].content}
			/>
		);
	});

	let categories = data.slice(0, 3).map((val) => {
		return <CategoryCard category={val[1].content} />;
	});

	return (<div>
		<div className="w-[100%] h-[15em] relative">
			<Image
				className="absolute top-0 left-0"
				src="/heroBg.jpeg"
				layout="fill"
				alt="hero"
			/>
			<div className="min-h-[20em] grid grid-cols-2fr_1fr absolute top-0 left-0">
				<div className="flex flex-col m-[150px] items-left justify-center gap-[4px]">
					<p className="text-blue-950 text-[44px]">Blog Posts</p>
				</div>
			</div>
		</div>
		<div className="grid grid-cols-[3fr_1fr] mx-[8em] my-[4em]">
			<div className="flex flex-col gap-[2em]">
				{ jsx }
			</div>

			<div>
				<div className="grid grid-cols-1 border border-gray-500 rounded-md p-4 m-4">
					<p className="text-[#2B296D] font-bold text-xl mb-2">RECENT POSTS</p>
					{recentPosts}
				</div>
				<div className="grid grid-cols-1 border border-gray-500 rounded-md p-4 m-4">
					<p className="text-[#2B296D] font-bold text-xl mb-2">CATEGORIES</p>
					{categories}
				</div>
			</div>
		</div>
	</div>);
}
