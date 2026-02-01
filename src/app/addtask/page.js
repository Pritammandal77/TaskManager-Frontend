"use client";

import { addTask } from "@/lib/taskApi";
import { useState } from "react";

function Page() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleAddTask = async() => {
        if (!title || !description) {
            alert("Please fill all fields");
            return;
        }
        try {
            const res = await addTask(title, description)
            console.log(res)
        } catch (error) {
            console.log("something went wrong , while adding task")
        }
    };

    return (
        <div className="min-h-screen  px-4 py-12 bg-linear-to-b from-green-100 to-green-50">
            <div className="max-w-3xl mx-auto">

                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
                        Add a new task
                    </h1>
                    <p className="text-md text-gray-600 mt-1">
                        Add tasks to stay organized and track your progress efficiently.
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white border border-gray-200 rounded-md p-6">

                    {/* Title */}
                    <div className="mb-5">
                        <label className="block text-md font-medium text-gray-700 mb-1">
                            Task Title
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Finish backend API"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3 py-2 text-md border border-gray-300 rounded
                         focus:outline-none focus:border-green-600"
                        />
                        <p className="text-xs text-gray-600 mt-1">
                            Keep the title short and meaningful.
                        </p>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                        <label className="block text-md font-medium text-gray-700 mb-1">
                            Description
                        </label>
                        <textarea
                            placeholder="Describe what needs to be done..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={5}
                            className="w-full px-3 py-2 text-md border border-gray-300 rounded
                         focus:outline-none focus:border-green-600 resize-none"
                        />
                        <p className="text-xs text-gray-600 mt-1">
                            Add a brief explanation of the task.
                        </p>
                    </div>

                    {/* Action */}
                    <div className="flex justify-end ">
                        <button
                            onClick={handleAddTask}
                            className="bg-green-600 text-white cursor-pointer px-6 py-2 text-md font-medium rounded
                         hover:bg-green-700 transition"
                        >
                            Add Task
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Page;
