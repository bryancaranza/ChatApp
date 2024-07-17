import ContainerCard from "@/components/custom/ContainerCard";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/routes/routes";
import { useAuth } from "@/state/context/AuthContext";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";

const Login = () => {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <ContainerCard>
      <div className="flex flex-col justify-center items-center gap-2 w-full h-full">
        <p className="text-3xl ">Let's chat!!</p>

        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2 w-full">
            <Input
              type="text"
              placeholder="Username"
              {...register("Username", { required: true })}
            />
            <Input
              type="password"
              placeholder="Password"
              {...register("Password", { required: true })}
            />
            <Button type="submit" onClick={login}>
              Login
            </Button>
          </div>
        </form>
        <div className="flex gap-2">
          <Button asChild variant="secondary">
            <Link to={ROUTES.ROOT}>Go to Home</Link>
          </Button>
          <Button asChild>
            <Link to={ROUTES.DASHBOARD}>Go to Dashboard</Link>
          </Button>
        </div>
      </div>
    </ContainerCard>
  );
};

export default Login;
