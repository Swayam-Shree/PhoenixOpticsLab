import Link from "next/link";

export default function BlogDisplay({id, date, title, author, content}) {
	return (<div className="border border-black">
		<p className="text-sm">{date}</p>
		<p className="text-sm">{author}</p>
		<p className="text-3xl">{title}</p>

		<Link className="bg-black text-white" href={"/blogs/" + id }>Read more...</Link>
	</div>);
}