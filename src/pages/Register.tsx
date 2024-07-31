import ContainerCard from "@/components/custom/ContainerCard";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/routes/routes";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { IRegister } from "@/interface/IAuth";
import useAuthHooks from "@/hooks/useAuthHooks";
import useUserHooks from "@/hooks/useUserHooks";

const Register = () => {
  const { register: registerUser, isLoading } = useAuthHooks();
  const { getUsers } = useUserHooks();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<IRegister>();

  const checkDuplicateUsername = (value: any) =>
    getUsers((res) => {
      const filter = res.filter((user) => user.username === value);

      return filter;
    });

  const onSubmit = (data: IRegister) => {
    getUsers((res) => {
      const filter = res.filter((user) => user.username === data.username);

      if (filter?.length > 0) {
        console.log(filter);

        return setError("username", {
          message: "Username already exist.",
        });
      } else {
        return registerUser(data, {
          onSuccess: () => reset(),
        });
      }
    });
  };

  return (
    <ContainerCard className="w-[300px]">
      <div className="flex flex-col justify-center items-center gap-4 w-full h-full">
        <p className="text-3xl ">New to chat? Register now!</p>

        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 w-full">
            <div>
              <Input
                type="text"
                placeholder="Firstname"
                className={`${
                  errors.firstname ? "border-red-600 border-2" : ""
                }`}
                {...register("firstname", { required: true })}
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="Lastname"
                className={`${
                  errors.lastname ? "border-red-600 border-2" : ""
                }`}
                {...register("lastname", { required: true })}
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="Username"
                className={`${
                  errors.username ? "border-red-600 border-2" : ""
                }`}
                {...register("username", {
                  required: true,
                  onBlur: (e) => checkDuplicateUsername(e.target.value),
                })}
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                className={`${
                  errors.password ? "border-red-600 border-2" : ""
                }`}
                {...register("password", {
                  required: true,
                })}
              />
            </div>
            <Button type="submit" disabled={isLoading}>
              Register
            </Button>
          </div>
        </form>
        <div className="flex gap-1 items-center text-gray-400 text-sm">
          <p>Already registered? Back to</p>
          <Button
            asChild
            variant="link"
            className="text-gray-400 text-sm font-bold p-0"
          >
            <Link to={ROUTES.LOGIN}>login!</Link>
          </Button>
        </div>
      </div>
    </ContainerCard>
  );
};

export default Register;
