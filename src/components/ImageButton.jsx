import Image from 'next/image';

export default function({ src, label }) {
	return (<div className="group flex flex-col items-center p-[2em] hover:bg-[#1F2B6C] rounded-lg">
		<Image src={src} width={40} height={40} alt="svg" />
		<p className="text-[#212124] group-hover:text-white">{label}</p>
	</div>);
}