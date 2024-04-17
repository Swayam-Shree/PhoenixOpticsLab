import Image from 'next/image';

export default function TextCard2Liner({ src, title, line1, line2 }) {
	return (<div className="flex flex-col gap-[8px] bg-[#BFD2F8] rounded-lg p-[2em] justify-around group hover:bg-[#1F2B6C]">
		<Image className="group-hover:bg-[#BFD2F8] group-hover:rounded-xl" src={src} width={40} height={40} alt="blog" />
		<p className="text-[#1F2B6C] font-bold text-xl group-hover:text-[#BFD2F8]">{title}</p>
		<p className="text-[#1F2B6C] text-lg text-pretty group-hover:text-[#BFD2F8]">{line1}</p>
		<p className="text-[#1F2B6C] text-lg text-pretty group-hover:text-[#BFD2F8]">{line2}</p>
	</div>);
}