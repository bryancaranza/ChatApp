import ContainerCard from "@/components/custom/ContainerCard";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/routes/routes";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import useAuthHooks from "@/hooks/useAuthHooks";
import { ILogin } from "@/interface/IAuth";

const Login = () => {
  const { login } = useAuthHooks();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();
  const onSubmit = (data: ILogin) => login(data);

  return (
    <ContainerCard className="w-[300px]">
      <div className="flex flex-col justify-center items-center gap-4 w-full h-full">
        <p className="text-3xl ">Let's chat!!</p>

        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 w-full">
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
            <Button type="submit">Login</Button>
          </div>
        </form>
        <div className="flex gap-1 items-center text-gray-400 text-sm">
          <p>Not registered yet?</p>
          <Button asChild variant="link" className="text-gray-400 text-sm p-0">
            <Link to={ROUTES.REGISTER}>Sign up!</Link>
          </Button>
        </div>
      </div>
    </ContainerCard>
  );
};

export default Login;
