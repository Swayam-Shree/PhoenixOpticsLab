"use client";

import { collection } from "firebase/firestore";
import { db } from "@/app/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import Image from "next/image";
import BlogDisplay from "../../../components/BlogDisplay";
import RecentPosts from "../../../components/RecentPosts";
import CategoryCard from "../../../components/CategoryCard";
import ContactUs from "@/components/ContactUs";

export default function Blogs() {
	const [value, loading, error] = useCollection(collection(db, "blogs"));
	if (loading) {
		return <div>Loading...</div>;
	} else if (error) {
		return <div>Error. Please refresh.</div>;
	}

	let data = value.docs.map((doc) => [doc.id, doc.data()]);

	let jsx = data.map((val) => {
		return (
			<BlogDisplay
				id={val[0]}
				date={val[1].date}
				title={val[1].title}
				author={val[1].author}
				content={val[1].content}
			/>
		);
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

	return (
		<div className="flex flex-col">
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
							<h1 className="text-2xl font-bold">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</h1>
							<p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.`}</p>
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
							<p className="text-[#2B296D] font-bold text-xl mb-2">
								RECENT POSTS
							</p>
							{recentPosts}
						</div>
						<div className="grid grid-cols-1 border border-gray-500 rounded-md p-4 m-4">
							<p className="text-[#2B296D] font-bold text-xl mb-2">
								CATEGORIES
							</p>
							{categories}
						</div>
					</div>
				</div>
			</div>
			<ContactUs />
		</div>
	);
}
