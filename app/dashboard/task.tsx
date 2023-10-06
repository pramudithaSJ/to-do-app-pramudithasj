"use client";
import React, { useContext, useState } from "react";
import ReactPaginate from 'react-paginate';
import { TaskContext } from "../../context/taskContext";
import Image from "next/image";

const TasksTable = () => {
    const { tasks } = useContext(TaskContext);

    const [currentPage, setCurrentPage] = useState(0);
    const tasksPerPage = 8;
    const pageCount = Math.ceil(tasks.length / tasksPerPage);

    const handlePageClick = (selectedPage: any) => {
        setCurrentPage(selectedPage.selected);
    };

    const offset = currentPage * tasksPerPage;
    const currentTasks = tasks.slice(offset, offset + tasksPerPage);

    function formatDate(dateString: any) {
        const date = new Date(dateString);
        const month = date.toLocaleString('default', { month: 'short' }); // Get the first three letters of the month
        const day = date.getDate();
        return `${month} ${day}`;
    }

    return (
        <div>
            <table className="w-full">
                <tbody className="text-sm">
                    {currentTasks.map((task) => (
                        <tr key={task.id}>
                            {task.priority === "LOW" ? <td className="py-5 text-green-500"> <Image src="/Assets/Priority-Low.svg" alt="profile" width={20} height={20} /></td> : task.priority === "MEDIUM" ? <td className="py-5 text-yellow-300"><Image src="/Assets/Priority-Medium.svg" alt="profile" width={20} height={20} /></td> : <td className="py-5 text-red-500"><Image src="/Assets/Priority-High.svg" alt="profile" width={20} height={20} /></td>}
                            <td className="py-5 w-96">{task.todo}
                                {task.completed ? null : (
                                    <td className="text-yellow-300 text-center">
                                        <button
                                            className=" text-done-bg px-2 py-1 rounded"
                                            onClick={() => {
                                                alert("Task Completed");
                                            }}>
                                            Mark as Complete
                                        </button>
                                    </td>
                                )}</td>
                            {task.completed ? <td className="py-5 text-green-500 text-center">Done</td> : <td className="text-yellow-300 text-center">In Progress</td>}
                            <td className="py-5">{formatDate(task.createdAt)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-4">
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                />
            </div>
        </div>
    );
};

export default TasksTable;