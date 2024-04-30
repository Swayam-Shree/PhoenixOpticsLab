import Link from "next/link";

export default function RecentPosts({ id, date, title, author, content }) {
	return (
		<div className="flex items-center border-gray-300 pt-1 mb-2">
			<img
				src={`https://cdn.pixabay.com/photo/2014/09/20/13/52/board-453758_1280.jpg`}
				alt="Post image"
				className="w-12 h-12 mr-4 rounded object-cover"
			/>
			<div className="flex flex-col">
				<div className="flex flex-row">
					<p className="text-xs font-semibold text-[#159EEC]">{date}</p>
					<p className="text-xs font-semibold text-[#159EEC] ml-1 mr-1">{` • `}</p>
					<p className="text-xs font-semibold text-[#159EEC]">CATEGORY</p>
				</div>
				{/* <p className="text-xs font-semibold text-[#159EEC]">{date}</p> */}
				{/* <p className="text-sm text-gray-700">{author}</p> */}
				<p className="text-xl text-gray-900 font-semibold">{title}</p>
				{/* <Link href={`/blogs/${id}`}>
          <a className="text-blue-500 hover:text-blue-800 mt-2">Read more...</a>
        </Link> */}
			</div>
		</div>
	);
}
