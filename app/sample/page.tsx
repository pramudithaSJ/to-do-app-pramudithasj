import Sidebar from "../common/sidebar";

export default function Sample() {
    return (
        <main className="flex min-h-screen w-full">
            <div className="1/5 bg-purple-900">
            <Sidebar />
            </div>
           
            <div className="w-4/5">
                <div className="m-5">
                    <p className="text-3xl font-semibold my-10">
                     This is a sample page
                    </p>
                </div>
            </div>
        </main>
    );
}
