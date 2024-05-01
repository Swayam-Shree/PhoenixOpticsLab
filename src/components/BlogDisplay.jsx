import Link from "next/link";
import Image from "next/image";

export default function BlogDisplay({ id, date, title, author, content }) {
	return (<div className="flex flex-col items-left">
		<Image src="/project.jpeg" width={500} height={250} />
		<div className="flex gap-[40px] my-[8px]">
			<p className="text-sm">{date}</p>
			<p className="text-sm">{"By " + author}</p>
		</div>
		<p className="text-3xl text-[#1F2B6C] font-bold">{title}</p>
		<p className="text-lg">{content.slice(0, 100) + "..."}</p>

		<div className="mt-[8px]">
			<Link className="mt-[1em] bg-[#BFD2F8] text-[#1F2B6C] font-bold rounded-full px-[24px] py-[8px]" href={"/blogs/" + id}>
				Read more...
			</Link>
		</div>
	</div>);
}
