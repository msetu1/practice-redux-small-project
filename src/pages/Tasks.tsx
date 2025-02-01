
import AddTaskModal from "@/components/module/tasks/AddTaskModal";
import TasksCard from "@/components/module/tasks/TasksCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTask, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const Tasks = () => {
    const tasks=useAppSelector(selectTask)
    const dispatch=useAppDispatch()
    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
             <div className="flex items-center justify-end gap-4">
                <h2 className="mr-auto">Tasks</h2>
                <Tabs defaultValue="All">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger onClick={()=>dispatch(updateFilter('All'))} value="All">All</TabsTrigger>
                    <TabsTrigger onClick={()=>dispatch(updateFilter('Low'))} value="Low">Low</TabsTrigger>
                    <TabsTrigger onClick={()=>dispatch(updateFilter('Medium'))} value="Medium">Medium</TabsTrigger>
                    <TabsTrigger onClick={()=>dispatch(updateFilter('High'))} value="High">High</TabsTrigger>
                </TabsList>
                </Tabs>
                <AddTaskModal/>
             </div>
             <div className="space-y-5 mt-5">
                {
                    tasks?.map((task)=><TasksCard task={task} key={task.id}/>)
                }
             </div>
        </div>
    );
};

export default Tasks;