"use client";

import { collection } from "firebase/firestore";
import { db } from "@/app/firebase";
import { useCollection } from "react-firebase-hooks/firestore" ;
import Image from "next/image";
import TwoDataDisplay from "@/components/TwoDataDisplay";
import ContactUs from "@/components/ContactUs";
import RecentPosts from "../../../components/RecentPosts";

export default function Blogs() {
	const [collaborators, collaboratorsLoading, collaboratorsError] = useCollection(collection(db, "collaborators"));
    const [blogs, blogsLoading, blogsError] = useCollection(collection(db, "blogs"));

    if (collaboratorsLoading || blogsLoading) {
        return (<div>Loading...</div>);
    } else if (collaboratorsError || blogsError) {
        return (<div>Error. Please refresh.</div>);
    }

    let collaboratorsData = collaborators.docs.map(doc => doc.data());
    let jsx = collaboratorsData.map((val) => {
        return <TwoDataDisplay key={val.name} title={val.name} content={val.details} />;
    });

    let blogsData = blogs.docs.map(doc => [doc.id, doc.data()]);
    let recentPosts = blogsData.slice(0, 3).map((val) => {
        return <RecentPosts key={val[0]} id={val[0]} date={val[1].date} title={val[1].title} author={val[1].author} content={val[1].content} />;
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
				<p className="text-blue-950 text-[44px]">Our Collaborators</p>
				
			  </div>
			</div>
		  </div>
		  <div>
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
		  </div>
		  <ContactUs/>
		</div>
	  );
	}