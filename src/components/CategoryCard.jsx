import Link from "next/link";

export default function CategoryCard({ category }) {
	return (
		<div className="flex items-center border-b-1 pb-1 border-gray-300 pt-1 mb-1 max-w-full grow">
			{/* <img
				src={`https://cdn.pixabay.com/photo/2014/09/20/13/52/board-453758_1280.jpg`}
				alt="Post image"
				className="w-12 h-12 mr-4 rounded object-cover"
			/> */}
			<div className="flex flex-col max-w-full grow">
				<div className="flex flex-row items-end max-w-full grow">
					<p className="text-l text-gray-900 font-medium">Category</p>
					<p className="text-sm text-white bg-[#159EEC] p-1 rounded-full">23</p>
				</div>
				{/* <p className="text-xs font-semibold text-[#159EEC]">{date}</p> */}
				{/* <p className="text-sm text-gray-700">{author}</p> */}
				{/* <Link href={`/blogs/${id}`}>
          <a className="text-blue-500 hover:text-blue-800 mt-2">Read more...</a>
        </Link> */}
			</div>
		</div>
	);
}
