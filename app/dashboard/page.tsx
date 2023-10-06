"use client";
import { useState, useEffect } from "react";
import Header from "../common/header";
import Sidebar from "../common/sidebar";
import WelcomeNote from "../common/welcome";
import TasksTable from "./task";
import PieChart from "./pieChart";
import ActivityFeed from "./activityFeed";

export default function Sample() {
    const [isSidebarVisible, setSidebarVisible] = useState(true);


    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };


    const handleResize = () => {
        if (window.innerWidth <= 640) {

            setSidebarVisible(false);
        } else {

            setSidebarVisible(true);
        }
    };

    useEffect(() => {

        window.addEventListener("resize", handleResize);

        handleResize();


        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <main className="flex min-h-screen w-full">
            <div
                className={`lg:w-1/5 ${isSidebarVisible ? "lg:block" : "hidden"}`}
            >
                <Sidebar />
            </div>

            <div className="w-full h-screen overflow-auto">
                <Header />
                <button
                    className="lg:hidden absolute top-4 right-4 z-10 p-2 bg-purple-900 text-white rounded"
                    onClick={toggleSidebar}
                >
                    {isSidebarVisible ? "Hide Sidebar" : "Show Sidebar"}
                </button>

                <WelcomeNote />
                <div className="flex flex-col lg:flex-row w-full py-10 px-10">
                    <div className={` w-full ${isSidebarVisible ? "lg:w-2/3" : "w-full"}`}>
                        <p className="text-lg font-semibold">Tasks</p>
                        <TasksTable />
                    </div>
                    <div className="lg:w-1/3">

                        <div className={`lg:w-full lg:pl-4 pb-10 ${isSidebarVisible ? "lg:block" : "hidden"}`}>
                            <p className="text-lg font-semibold">Activity Feed</p>
                            <ActivityFeed />
                        </div>
                        <div className={`lg:w-full lg:pl-4 ${isSidebarVisible ? "lg:block" : "hidden"}`}>
                            <p className="text-lg font-semibold">Task Priorities</p>
                            <PieChart />
                        </div>

                    </div>

                </div>
            </div>
        </main>
    );
}