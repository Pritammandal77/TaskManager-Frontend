"use client";

import { deleteTask, fetchAllTasks, updateTask } from "@/lib/taskApi";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Page() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await fetchAllTasks();
                setTasks(res.data.data);
            } catch (error) {
                console.log("Error while fetching tasks");
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-green-700">
                Loading tasks...
            </div>
        );
    }

    const handleUpdateTask = async (taskId, newStatus) => {

        // 🔥 UI pe turant change
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task._id === taskId
                    ? { ...task, status: newStatus }
                    : task
            )
        );

        try {
            await updateTask(taskId, newStatus);
        } catch (error) {
            console.log("error while updating task");

            // ❌ optional: rollback agar API fail ho
        }
    };

    const handleDeleteTask = async (id) => {

        // 🔥 UI se turant remove
        setTasks(prevTasks =>
            prevTasks.filter(task => task._id !== id)
        );

        try {
            await deleteTask(id);
        } catch (error) {
            console.log("Error while deleting the task");
        }
    };


    return (
        <div className="min-h-screen bg-green-50 px-6 py-10">
            <div className="max-w-4xl mx-auto">
                {/* Page Heading */}
                <div className="flex items-center justify-between ">
                    <h1 className="text-3xl font-bold text-green-800">
                        Tasks
                    </h1>

                    <Link href="/addtask" className="cursor-pointer">
                        <button className="text-md bg-green-400 font-semibold px-3 py-1 rounded-xl cursor-pointer">
                            Add new task
                        </button>
                    </Link>
                </div>

                {/* Empty State */}
                {tasks.length === 0 && (
                    <div className="text-center text-gray-600 mt-20">
                        No tasks added yet 🌱
                    </div>
                )}

                {tasks.map((task) => {
                    const formattedDate = new Date(task.createdAt).toLocaleString(
                        "en-IN",
                        {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                        }
                    );

                    return (
                        <div
                            key={task._id}
                            className="bg-white border border-green-100 rounded-lg p-5 shadow-sm hover:shadow-md transition"
                        >
                            {/* Title + Date */}
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800">
                                        {task.title}
                                    </h2>
                                    <p className="text-xs text-gray-500 mt-1">
                                        {formattedDate}
                                    </p>
                                </div>

                                <select
                                    value={task.status}
                                    className={`text-sm px-3 py-1 rounded-md border 
                                                     ${task.status === "completed"
                                            ? "bg-green-100 text-green-700 border-green-300"
                                            : "bg-yellow-100 text-yellow-700 border-yellow-300"
                                        }`}
                                    onChange={(e) =>
                                        handleUpdateTask(task._id, e.target.value)
                                    }
                                >
                                    <option value="pending">Pending</option>
                                    <option value="completed">Completed</option>
                                </select>

                            </div>

                            {/* Description */}
                            <p className="text-gray-600 text-sm mb-4">
                                {task.description}
                            </p>

                            {/* Actions */}
                            <div className="flex justify-end">
                                <button
                                    className="text-sm text-red-600 hover:text-red-700 bg-red-200 cursor-pointer px-2 py-1 rounded-xl font-medium"
                                    onClick={() => {
                                        handleDeleteTask(task._id)
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );
}

export default Page;
