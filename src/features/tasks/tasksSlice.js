import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        setAllDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            }
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(index, 1);
        },
        removeAllTasks: (state) => {
            state.tasks = [];
        },
        fetchExampleTasks: () => { },

        setTasks: (state, {payload: tasks}) => {
            state.tasks=tasks;
        },
    },


});
export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    setAllDone,
    removeTask,
    removeAllTasks,
    fetchExampleTasks,
    setTasks,
} = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;