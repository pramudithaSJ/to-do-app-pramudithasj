import Image from "next/image";

const ActivityFeed = () => {
    const sidebarItems = [
        { key: '001', icon: '/Assets/Avatar-1.svg', text: 'Cevlurhur gatjufej milomse ipoka nef va fawotge wi ibijiwo uzuca ubhilgu oduriew.' },
        { key: '002', icon: '/Assets/Avatar-2.svg', text: 'Cevlurhur gatjufej milomse ipoka nef va fawotge wi ibijiwo.' },
    ];
    return (
        <div>

            {sidebarItems.map((item) => (
                <div className="flex gap-3 py-5 px-5" key={item.key}>
                    <Image src={item.icon} alt={item.text} width={35} height={35} />
                    <span>{item.text}</span>
                </div>
            ))}
        </div>
    )
}

export default ActivityFeed;