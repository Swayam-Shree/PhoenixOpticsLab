"use client";

import { collection } from "firebase/firestore";
import { db } from "@/app/firebase";
import { useCollection } from "react-firebase-hooks/firestore" ;
import Image from "next/image";
import BlogDisplay from "../../../components/BlogDisplay";
import RecentPosts from "../../../components/RecentPosts";
import ContactUs from "@/components/ContactUs";

export default function Blogs() {
	const [value, loading, error] = useCollection(collection(db, "blogs"));
	if (loading) {
		return (<div>Loading...</div>);
	} else if (error) {
		return (<div>Error. Please refresh.</div>);
	}

	let data = value.docs.map(doc => [doc.id, doc.data()]);

	let jsx = data.map((val) => {
		return <BlogDisplay id={val[0]} date={val[1].date} title={val[1].title} author={val[1].author} content={val[1].content} />
	});

	let recentPosts = data.slice(0, 3).map((val) => {
        return <RecentPosts key={val[0]} id={val[0]} date={val[1].date} title={val[1].title} author={val[1].author} content={val[1].content} />
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
		  <div >
		  <div className="flex flex-row gap-[4px]">
		  <div className="grid grid-cols-1 gap-4">
          {jsx}
        </div>
		  
        
        <div className="grid grid-cols-1 gap-4">
		<p className="text-[#159EEC] font-bold text-xl">Recent Posts</p>
          {recentPosts}
        </div>
      </div>
		  	
		  </div>
		  <ContactUs/>
		</div>
	  );
	}