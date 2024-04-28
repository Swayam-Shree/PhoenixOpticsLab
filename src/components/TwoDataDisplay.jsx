import Link from "next/link";

export default function TwoDataDisplay({title, content}) {
	return (<div className="border border-black">
		<p className="text-3xl">{title}</p>
		<p className="text-lg">{content}</p>
	</div>);
}