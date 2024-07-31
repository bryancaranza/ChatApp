import { Input } from "../ui/input";

interface Props {
  input: any;
  error?: {
    message: string;
  };
}

const CustomInput = ({ error, input }: Props) => {
  return (
    <div className="w-full relative">
      <Input {...input} />
      {error ? (
        <p className="text-red-600 text-sm absolute right-0 bottom-0">
          {error.message}
        </p>
      ) : null}
    </div>
  );
};

export default CustomInput;
