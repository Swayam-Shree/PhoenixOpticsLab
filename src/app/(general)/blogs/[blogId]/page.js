"use client";

import { doc, collection } from "firebase/firestore";
import { db } from "@/app/firebase";
import { useDocument, useCollection } from "react-firebase-hooks/firestore";

import Image from "next/image";

import ContactUs from "@/components/ContactUs";
import RecentPosts from "../../../../components/RecentPosts";
import CategoryCard from "../../../../components/CategoryCard";

export default function Page({ params }) {
	let document = doc(db, "blogs", params.blogId)
	const [value, loading, error] = useDocument(document);
	const [articles, articlesLoading, articlesError] = useCollection(collection(db, "blogs"));

	if (loading) {
		return (<div>Loading...</div>);
	} else if (error) {
		return (<div>Error. Please refresh.</div>);
	}

	let data = articles.docs.map(doc => [doc.id, doc.data()]);

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
		
		<div>
			<div className="flex flex-row ">
				{/* <div className="grid grid-cols-1 gap-4">{jsx}</div> */}
				<div className="max-w-4xl mx-auto p-5">
					<div className="mb-6">
						<img
							src={`https://cdn.pixabay.com/photo/2014/09/20/13/52/board-453758_1280.jpg`}
							alt="Header Image"
							className="w-full h-64 object-cover rounded-lg"
						/>
					</div>
					<div className="text-lg text-gray-700 space-y-4">
						<h1 className="text-2xl font-bold">{value.data().title}</h1>
						<h2 className="text-2xl font-bold">{"by " + value.data().author + " on " + value.data().date}</h2>
						<p className="mt-[2em]">{value.data().content}</p>
					</div>
					<div className="flex justify-between mt-8">
						<button className="text-blue-500 hover:text-blue-700">
							← Previous Article
						</button>
						<button className="text-blue-500 hover:text-blue-700">
							Next Article →
						</button>
					</div>
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
		</div>

		<ContactUs />
	</div>);
}