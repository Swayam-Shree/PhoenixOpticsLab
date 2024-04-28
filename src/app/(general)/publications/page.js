"use client";

import { collection } from "firebase/firestore";
import { db } from "@/app/firebase";
import { useCollection } from "react-firebase-hooks/firestore" ;
import Image from "next/image";
import TwoDataDisplay from "@/components/TwoDataDisplay";
import TextCard2Liner from "../../../components/TextCard2Liner";
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
		  <div className="flex flex-col items-center gap-[4px]">
				<p className="text-[#159EEC] font-bold text-xl">GET IN TOUCH</p>
				<p className="text-[#1F2B6C] font-bold text-3xl">CONTACT</p>
			</div>

			<div className="grid grid-cols-4 gap-[2em] m-[8em]">
				<TextCard2Liner
					src="/contact.svg"
					title="EMERGENCY"
					line1="(237) 681-812-255"
					line2="(237) 681-812-255"
				/>
				<TextCard2Liner
					src="/location.svg"
					title="LOCATION"
					line1="0123 Some place"
					line2="9876 Some country"
				/>
				<TextCard2Liner
					src="/email.svg"
					title="EMAIL"
					line1="fildineeesoe@ gmil.com"
					line2="myebstudios@ gmail.com"
				/>
				<TextCard2Liner
					src="/clock.svg"
					title="WORKING HOURS"
					line1="Mon-Sat 09:00-20:00"
					line2="Sunday Emergency only"
				/>
			</div>
		</div>
	  );
	}