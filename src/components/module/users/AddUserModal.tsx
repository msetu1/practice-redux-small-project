import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import { IUser } from "@/type";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const AddUserModal = () => {
    const form = useForm()
      const disPatch=useAppDispatch()
    
      const onSubmit:SubmitHandler<FieldValues>=(data)=>{
        console.log(data)
        disPatch(addUser(data as IUser))
      }
    return (
        <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
          <DialogDescription className="sr-only">
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} value={field.value || ''} />
                </FormControl>
              </FormItem>
            )}
          />
          <DialogFooter>
            <Button className="mt-5" type="submit">Save changes</Button>
          </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
    );
};

export default AddUserModal;