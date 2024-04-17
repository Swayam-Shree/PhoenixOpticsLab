import Image from 'next/image';

export default function Card({ title, description, src }) {
	return (<div className="grid grid-cols-[3fr_2fr] bg-[#2B296D] text-white py-[2em] pl-[2em] rounded-[32px] gap-[1.5em]">
		<div>
			<p className="font-bold text-3xl mb-[0.5em]">{title}</p>
			<p>{description}</p>
		</div>
		<Image src={src} width={200} height={200} alt="project" />
	</div>);
}