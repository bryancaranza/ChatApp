import ContainerCard from "@/components/custom/ContainerCard";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/routes/routes";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { IRegister } from "@/interface/IAuth";
import useAuthHooks from "@/hooks/useAuthHooks";
import { toast } from "@/components/ui/use-toast";

const Register = () => {
  const { register: registerUser, isLoading } = useAuthHooks();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>();

  const onSubmit = (data: IRegister) => {
    registerUser(data, {
      onSuccess: () => {
        toast({
          title: "Register success",
        });
      },
    });
  };

  console.log(errors);

  return (
    <ContainerCard className="w-[300px]">
      <div className="flex flex-col justify-center items-center gap-4 w-full h-full">
        <p className="text-3xl ">New to chat? Register now!</p>

        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 w-full">
            <Input
              type="text"
              placeholder="Firstname"
              className={`${errors.firstname ? "border-red-600 border-2" : ""}`}
              {...register("firstname", { required: true })}
            />
            <Input
              type="text"
              placeholder="Lastname"
              className={`${errors.lastname ? "border-red-600 border-2" : ""}`}
              {...register("lastname", { required: true })}
            />
            <Input
              type="text"
              placeholder="Username"
              className={`${errors.username ? "border-red-600 border-2" : ""}`}
              {...register("username", { required: true })}
            />
            <Input
              type="password"
              placeholder="Password"
              className={`${errors.password ? "border-red-600 border-2" : ""}`}
              {...register("password", { required: true })}
            />
            <Button type="submit" disabled={isLoading}>
              Register
            </Button>
          </div>
        </form>
        <div className="flex gap-1 items-center text-gray-400 text-sm">
          <p>Already registered? Back to</p>
          <Button asChild variant="link" className="text-gray-400 text-sm p-0">
            <Link to={ROUTES.LOGIN}>login!</Link>
          </Button>
        </div>
      </div>
    </ContainerCard>
  );
};

export default Register;
