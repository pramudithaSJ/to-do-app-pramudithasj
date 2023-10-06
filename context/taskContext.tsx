"use client"
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

interface TaskContextType {
    id: string;
    createdBy: string;
    priority: "LOW" | "MEDIUM" | "HIGH";
    todo: string;
    completed: boolean;
    createdAt: string;
}

interface TaskContextValue {
    tasks: TaskContextType[];
}

interface TaskProviderProps {
    children: React.ReactNode;
}

export const TaskContext = React.createContext<TaskContextValue>({
    tasks: [],
});

export const TaskContextProvider = ({ children }: TaskProviderProps) => {
    const [tasks, setTasks] = useState<[]>([]);


    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get("https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do");
                setTasks(response.data);
            } catch (error) {
            
            }
        };

        fetchTasks();
    }, []);



    return <TaskContext.Provider value={{ tasks }}>
        <div>{children}
        </div></TaskContext.Provider>;
};