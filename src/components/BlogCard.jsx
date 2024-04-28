import Image from "next/image";

import { useRouter } from "next/navigation";

export default function BlogCard({ src, date, author, title, id}) {
	const router = useRouter();

	function handleClick() {
		router.push(`/blogs/${id}`);
	}

	return (<div className="grid grid-cols-[2fr_4fr] rounded-xl" onClick={handleClick}>
		<Image src={src} width={150} height={150} alt="blog" />
		<div className="flex flex-col gap-[12px]">
			<p className="text-[#159EEC]">{date + " | By " + author}</p>
			<p className="text-[#1F2B6C] text-xl">{title}</p>
			{/* <div className="flex gap-[8px]">
				<p>{viewCount} views</p>
				<Image src="/view.svg" width={20} height={20} alt="view" />
			</div> */}
		</div>
	</div>);
}