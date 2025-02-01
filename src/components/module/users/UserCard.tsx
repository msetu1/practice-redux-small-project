import { Button } from "@/components/ui/button";
import { removeUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import { IUser } from "@/type";
import { Trash2 } from "lucide-react";

interface PropUser{
    user:IUser
}

const UserCard = ({user}:PropUser) => {
    const dispatch =useAppDispatch()
    return (
        <div className="border px-5  rounded-md py-10">
            <div className="flex justify-between items-center">
            <h2 className="text-xl"><span className="font-bold">Name:</span> {user?.name}</h2>
            <Button onClick={()=>dispatch(removeUser(user.id))} variant='link' className="p-0 text-red-500">
                        <Trash2/>
                    </Button>
            </div>
        </div>
    );
};

export default UserCard;