"use client";

import { collection } from "firebase/firestore";
import { db } from "@/app/firebase";
import { useCollection } from "react-firebase-hooks/firestore" ;
import Image from "next/image";
import TwoDataDisplay from "@/components/TwoDataDisplay";
import ContactUs from "@/components/ContactUs";
import RecentPosts from "../../../components/RecentPosts";
export default function Blogs() {
	const [publicationsValue, publicationsLoading, publicationsError] = useCollection(collection(db, "publications"));
    const [blogsValue, blogsLoading, blogsError] = useCollection(collection(db, "blogs"));

    if (publicationsLoading || blogsLoading) {
        return (<div>Loading...</div>);
    } else if (publicationsError || blogsError) {
        return (<div>Error. Please refresh.</div>);
    }

    let publicationsData = publicationsValue.docs.map(doc => doc.data());
    console.log(publicationsData);

    let jsx = publicationsData.map((val) => {
        return <TwoDataDisplay key={val.title} title={val.title} content={val.details} />;
    });

    let blogsData = blogsValue.docs.map(doc => [doc.id, doc.data()]);
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
				<p className="text-blue-950 text-[44px]">Our Publications</p>
				
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