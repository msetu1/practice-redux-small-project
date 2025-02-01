import AddUserModal from "@/components/module/users/AddUserModal";
import UserCard from "@/components/module/users/UserCard";
import { selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";

const Users = () => {
    const users=useAppSelector(selectUser)
    console.log(users)
    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
             
             <div className="mb-5 flex items-center justify-between">
             <h2>Users :</h2>
             <AddUserModal/>
             </div>
             <div className="grid grid-cols-2 gap-5">
                {
                users?.map((user)=><UserCard user={user} key={user.id} />)
                }
             </div>
        </div>
    );
};

export default Users;