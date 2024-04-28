"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";

import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";

import Card from "@/components/Card";
import ImageButton from "@/components/ImageButton";
import BlogCard from "@/components/BlogCard";
import TextCard2Liner from "@/components/TextCard2Liner";

import { collection } from "firebase/firestore";
import { db } from "@/app/firebase";
import { useCollection } from "react-firebase-hooks/firestore" ;

export default function Home() {
	const router = useRouter();
	const [user, authLoading, authError] = useAuthState(auth);

	const [blogValues, blogLoading, blogError] = useCollection(collection(db, "blogs"));
	const blogData = [];
	if (blogValues) {
		for (let i = 0; i < Math.min(blogValues.docs.length, 4); ++i) {
			blogData.push([blogValues.docs[i].id, blogValues.docs[i].data()]);
		}
	}

	if (user) {
		router.push("/dashboard");
	} else if (authLoading) {
		return (<div>Loading...</div>);
	} else if (authError) {
		return (<div>Error</div>);
	} else {
		return (<div>
			<div className="w-[100%] h-[36em] relative">
				<Image className="absolute top-0 left-0" src="/heroBg.jpeg" layout="fill" alt="hero" />

				<div className="min-h-[36em] grid grid-cols[2fr_1fr] absolute top-0 left-0">
					<div className="flex flex-col m-[150px] items-left justify-center gap-[4px]">
						<p className="text-white text-[20px]">LOREM IPSUM</p>
						<p className="text-white text-[44px]">Lorem Ipsum dolor sit</p>
						<div className="flex my-[8px]">
							<div className="bg-white rounded-full px-[24px] py-[8px]">
								Our Projects
							</div>
						</div>
					</div>
				</div>

				<div className="flex gap-[10px] h-[70px] justify-around mx-[50px] absolute top-[34em] w-[90%]">
					<div className="flex items-center justify-around bg-[#75BFE1] rounded p-[28px] gap-[20px]">
						<div className="text-navbar-blue">Experiments</div>
						<Image src="/experiments.svg" width={40} height={40} alt="svg" />
					</div>
					<div className="flex items-center justify-around bg-[#F9C82D] rounded p-[28px] gap-[20px]">
						<div className="text-navbar-blue">Research methodology</div>
						<Image src="/research.svg" width={40} height={40} alt="svg" />
					</div>
					<div className="flex items-center justify-around bg-[#E6252B] rounded p-[28px] gap-[20px]">
						<div className="text-navbar-blue">Publications</div>
						<Image src="/publications.svg" width={40} height={40} alt="svg" />
					</div>
				</div>
			</div>

			<div className="mt-[8em] flex flex-col text-center items-center gap-[8px]">
				<p className="text-[#159EEC] font-bold text-lg">WELCOME TO OPTICAL LAB</p>
				<p className="text-[#1F2B6C] font-bold text-3xl">LOREM IPSUM DOLOR SIT</p>
				<p className="text-[#212124] w-[50%]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.
					Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
				</p>

				<Link className="text-[#159EEC] my-[1em]" href="/about">About Us</Link>
			</div>

			<div className="grid grid-rows-2 grid-cols-2 m-[5em] gap-[3em]">
				<Card 
					title="Project1"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor or..."
					src="/project.jpeg"
				/>
				<Card 
					title="Project2"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor or..."
					src="/project.jpeg"
				/>
				<Card 
					title="Project3"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor or..."
					src="/project.jpeg"
				/>
			</div>

			<div className="flex flex-col items-center gap-[4px]">
				<p className="text-[#159EEC] font-bold text-xl">LOREM IPSUM</p>
				<p className="text-[#1F2B6C] font-bold text-3xl">OUR SPECIALTIES</p>
			</div>

			<div className="grid grid-rows-3 grid-cols-4 m-[4em]">
				<ImageButton src="/heart.svg" label="Lorem" />
				<ImageButton src="/heart.svg" label="Lorem" />
				<ImageButton src="/heart.svg" label="Lorem" />
				<ImageButton src="/heart.svg" label="Lorem" />
				<ImageButton src="/heart.svg" label="Lorem" />
				<ImageButton src="/heart.svg" label="Lorem" />
				<ImageButton src="/heart.svg" label="Lorem" />
				<ImageButton src="/heart.svg" label="Lorem" />
				<ImageButton src="/heart.svg" label="Lorem" />
				<ImageButton src="/heart.svg" label="Lorem" />
				<ImageButton src="/heart.svg" label="Lorem" />
				<ImageButton src="/heart.svg" label="Lorem" />
			</div>

			<div className="flex flex-col items-center gap-[4px]">
				<p className="text-[#159EEC] font-bold text-xl">BETTER INFORMATION, BETTER LOREM</p>
				<p className="text-[#1F2B6C] font-bold text-3xl">BLOGS</p>
			</div>

			{
				blogData.length > 0 &&
			
				<div className="m-[8em] grid grid-rows-2 grid-cols-2 gap-[3em]">
					{ 
						blogData[0] &&
						<BlogCard
							src="/project.jpeg"
							author={blogData[0][1].author}
							title={blogData[0][1].title}
							date={blogData[0][1].date}
							id={blogData[0][0]}
						/>
					}
					{ 
						blogData[1] &&
						<BlogCard
							src="/dummy1.jpeg"
							author={blogData[1][1].author}
							title={blogData[1][1].title}
							date={blogData[1][1].date}
							id={blogData[1][0]}
						/>
					}
					{ 
						blogData[2] &&
						<BlogCard
							src="/dummy1.jpeg"
							author={blogData[2][1].author}
							title={blogData[2][1].title}
							date={blogData[2][1].date}
							id={blogData[2][0]}
						/>
					}
					{ 
						blogData[3] &&
						<BlogCard
							src="/project.jpeg"
							author={blogData[3][1].author}
							title={blogData[3][1].title}
							date={blogData[3][1].date}
							id={blogData[3][0]}
						/>
					}
				</div>
			}

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
		</div>);
	}
}