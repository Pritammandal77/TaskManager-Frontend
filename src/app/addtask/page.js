"use client";

import { addTask } from "@/lib/taskApi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

function Page() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    const handleAddTask = async () => {
        if (!title || !description) {
            toast.warning("Please fill all fields");
            return;
        }

        try {
            const res = await addTask(title, description)
            toast.success("task added successfully")
            setTitle("")
            setDescription("")
            router.push("/")
        } catch (error) {
            console.log("something went wrong , while adding task")
            toast.error("Error while adding the task")
        }
    };

    return (
        <div className="min-h-screen  px-4 py-12 bg-linear-to-b from-green-100 to-green-50">
            <div className="max-w-3xl mx-auto">

                <div className="mb-5">
                    <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
                        Add a new task
                    </h1>
                </div>

                <div className="bg-white border border-gray-200 rounded-md p-6">

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
