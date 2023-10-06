import Image from "next/image";

const Header = () => {

    return (
        <div className="w-full flex justify-between items-center h-10 px-10 py-14">
            <div className="text-2xl font-semibold">
                <p>Dashboard</p>
            </div>
            <div className="flex gap-3">
                <Image src="/Assets/Notifications.svg" alt="notification" width={24} height={24} />
                <Image src="/Assets/Profile.svg" alt="profile" width={24} height={24} />
                <Image src="/Assets/Chevron-down.svg" alt="profile" width={24} height={24} />
            </div>

        </div>
    )

}
export default Header;