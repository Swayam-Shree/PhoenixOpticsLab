import Image from 'next/image';

export default function CollaboratorCard({ name, designation, src }) {
	return (<div className="flex flex-col items-center m-[4px]">
		<Image src={src} width={200} height={200} />
		<div className="bg-[#BFD2F8] flex flex-col items-center min-w-[200px] p-[8px]">
			<p className="text-3xl text-[#1F2B6C] font-bold">{name}</p>
			<p className="text-lg font-bold">{designation}</p>
		</div>
		<div className="flex gap-[12px] bg-[#1F2B6C] min-w-[200px] justify-center p-[8px]">
			<Image src="/linkedin.svg" width={24} height={24} alt="twitter" />
			<Image src="/facebook.svg" width={24} height={24} alt="facebook" />
			<Image src="/instagram.svg" width={24} height={24} alt="instagram" />
		</div>
	</div>);
}