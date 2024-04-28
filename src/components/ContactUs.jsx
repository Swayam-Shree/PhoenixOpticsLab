import Image from 'next/image';
import TextCard2Liner from './TextCard2Liner';

export default function ContactUs() {
    return (
        <div>
            <div className="flex flex-col items-center gap-[4px]">
                <p className="text-[#159EEC] font-bold text-xl">GET IN TOUCH</p>
                <p className="text-[#1F2B6C] font-bold text-3xl">CONTACT</p>
            </div>

            <div className="grid grid-cols-4 gap-[2em] m-[8em]">
                <TextCard2Liner
                    src="/contact.svg"
                    title="EMERGENCY"
                    line1="(237) 681-812-255"
                    line2="(237) 681-812-255"
                />
                <TextCard2Liner
                    src="/location.svg"
                    title="LOCATION"
                    line1="0123 Some place"
                    line2="9876 Some country"
                />
                <TextCard2Liner
                    src="/email.svg"
                    title="EMAIL"
                    line1="fildineeesoe@ gmil.com"
                    line2="myebstudios@ gmail.com"
                />
                <TextCard2Liner
                    src="/clock.svg"
                    title="WORKING HOURS"
                    line1="Mon-Sat 09:00-20:00"
                    line2="Sunday Emergency only"
                />
            </div>
        </div>
    );
}
