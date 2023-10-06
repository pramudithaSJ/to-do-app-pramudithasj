import Link from "next/link";
import Image from "next/image";

const WelcomeNote = () => {
    return (
        <div className="w-full flex gap-5">
            <div>
                <p className="text-3xl font-semibold px-10">
                    Welcome back, John Doe
                </p>
                <p className="px-10 py-2 text-base">
                    The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.
                    <br />
                    <Link href="" className="text-red-600 underline">
                        Look here for more information
                    </Link>
                </p>
            </div>
            <div className="flex  gap-5">
                <div className=" h-auto w-auto flex items-center justify-center ">
                    <Image src="/Assets/Vector.svg" alt="profile" width={100} height={140} />
                </div>
                <div>
                    <Image src="/Assets/Close.svg" alt="profile" width={24} height={24} />
                </div>
            </div>
        </div>
    );
};

export default WelcomeNote;