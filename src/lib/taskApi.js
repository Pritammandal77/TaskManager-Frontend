import axiosInstance from "./axiosInstance"


export const addTask = async (title, description) => {
    const res = axiosInstance.post("/api/v1/task/add-task",
        {
            title, description
        },
        {
            withCredentials: true
        }
    )

    return res;
}

export const fetchAllTasks = async () => {
    const res = axiosInstance.get("/api/v1/task/get-all-tasks",
        {
            withCredentials: true
        }
    )
    return res;
}


export const updateTask = async (taskId, status) => {
    const res = await axiosInstance.patch("api/v1/task/update-task",
        {
            taskId, status
        },
        {
            withCredentials: true
        }
    )
    return res
}


export const deleteTask = async (id) => {
    const res = await axiosInstance.delete(`api/v1/task/delete-task/${id}`,
        {
            withCredentials: true
        }
    )
    return res;
}