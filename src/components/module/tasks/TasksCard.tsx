import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { deleteTask, toggleIsCompletedState } from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hook";
import { ITask } from "@/type";
import { Trash2 } from "lucide-react";

interface IProps{
    task:ITask
}

const TasksCard = ({task}:IProps) => {
    const dispatch=useAppDispatch()
    return (
        <div className="border px-5 py-3 rounded-md ">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className={cn("size-3 rounded-full ",{
                        "bg-green-500":task.priority==="Low",
                        "bg-yellow-500":task.priority==="Medium",
                        "bg-red-500":task.priority==="High",
                    })}></div>
                    <h2 className={cn({"line-through":task.isCompleted})}>{task?.title}</h2>
                </div>
                <div className="flex gap-3 items-center">
                    <Button  onClick={()=>dispatch(deleteTask(task.id))} variant='link' className="p-0 text-red-500">
                        <Trash2/>
                    </Button>
                    <Checkbox checked={task.isCompleted} onClick={()=>dispatch(toggleIsCompletedState(task.id))} />
                </div>
            </div>
            <p className="pb-3">Assigned To- {task?.assignedTo}</p>
            <p className="pt-5">{task?.description}</p>
        </div>
    );
};

export default TasksCard;