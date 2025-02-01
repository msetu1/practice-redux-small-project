import { RootState } from "@/redux/store";
import { ITask } from "@/type";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { removeUser } from "../user/userSlice";
interface InitialState {
  tasks: ITask[];
  filter: "All" | "Low" | "Medium" | "High";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "1",
      title: "Complete React Project",
      description:
        "Finish the final module of the React project and test all components.",
      dueDate: "2025-02-05",
      isCompleted: false,
      priority: "High",
      assignedTo: null,
    },
    {
      id: "2",
      title: "Write Blog Post",
      description:
        "Draft a blog post on JavaScript ES6 features and submit for review.",
      dueDate: "2025-02-07",
      isCompleted: false,
      priority: "Medium",
      assignedTo: null,
    },
    // {
    //   id: "3",
    //   title: "Fix Backend API Issues",
    //   description:
    //     "Debug and fix authentication issues in the Node.js backend.",
    //   dueDate: "2025-02-03",
    //   isCompleted: false,
    //   priority: "High",
    // },
    // {
    //   id: "4",
    //   title: "Prepare for Meeting",
    //   description:
    //     "Create a presentation for the upcoming team meeting on project updates.",
    //   dueDate: "2025-02-06",
    //   isCompleted: false,
    //   priority: "Low",
    // },
    // {
    //   id: "5",
    //   title: "Update Portfolio",
    //   description:
    //     "Add new projects and skills to the personal portfolio website.",
    //   dueDate: "2025-02-10",
    //   isCompleted: false,
    //   priority: "Medium",
    // },
  ],
  filter: "All",
};

type DraftTask = Pick<
  ITask,
  "title" | "description" | "dueDate" | "priority" | "assignedTo"
>;
const createTask = (taskData: DraftTask): ITask => {
  return {
    ...taskData,
    id: nanoid(),
    isCompleted: false,
    assignedTo: taskData.assignedTo ? taskData.assignedTo : null,
  };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    // add task ba create task
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    // isCompleted true or false check
    toggleIsCompletedState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    // deleted task
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    // filter
    updateFilter: (
      state,
      action: PayloadAction<"All" | "Low" | "Medium" | "High">
    ) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(removeUser, (state, action) => {
      state.tasks.forEach((task) =>
        task.assignedTo === action.payload ? (task.assignedTo = null) : task
      );
    });
  },
});

export const selectTask = (state: RootState) => {
  const filter = state.todo.filter;

  if (filter === "Low") {
    return state.todo.tasks.filter((task) => task.priority === "Low");
  } else if (filter === "Medium") {
    return state.todo.tasks.filter((task) => task.priority === "Medium");
  } else if (filter === "High") {
    return state.todo.tasks.filter((task) => task.priority === "High");
  } else {
    return state.todo.tasks;
  }
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};
export const { addTask, toggleIsCompletedState, deleteTask, updateFilter } =
  taskSlice.actions;
export default taskSlice.reducer;
