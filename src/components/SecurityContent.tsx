import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "./button";
import { Input } from "@/components/form/input";
import { AiOutlineCheck } from "react-icons/ai";
import { useModal } from "./modal"; 

const SecurityContent: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const { open, showModal, Modal } = useModal();

  const onSubmit = (data: any) => {
    console.log(data);
    showModal(true); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-16">
        <h2 className="font-bold">Change password</h2>
        <p>Please enter your current password to change your password.</p>
        <br />
        <Input
          id="current-password"
          type="password"
          label="Enter Current Password"
          placeholder="Enter current password"
          {...register("password", {
            required: "Password is required",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/,
              message:
                "Password must contain at least 8 characters, including one lowercase, one uppercase, one digit, and one special character like (#$%&@*).",
            },
          })}
          error={errors.password?.message}
        />
        <br />
        <Input
          id="new-password"
          type="password"
          label="Enter New Password"
          placeholder="New password"
          {...register("newPassword", {
            required: "Password is required",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/,
              message:
                "Password must contain at least 8 characters, including one lowercase, one uppercase, one digit, and one special character like (#$%&@*).",
            },
          })}
          error={errors.newPassword?.message}
        />
        <br></br>
        <Input
          id="confirm-password"
          label="Confirm New Password"
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === watch("newPassword") || "Passwords do not match",
          })}
          error={errors.confirmPassword && "Passwords do not match"}
        />
        <div className="flex gap-4 mt-4 justify-center">
          <Button className="rounded-md">Cancel</Button>
          <Button className="rounded-md" type="submit">Update Password</Button>
        </div>
      </form>

      <Modal  >
        <div className="text-center">
          < AiOutlineCheck className="bg-green-500 rounded-full text-white text-4xl mb-4 mx-auto" />
          <h2 className="text font-semibold">
            You have Changed your password successfully!
          </h2>
        
          <Button onClick={() => showModal(false)} className="mt-4 rounded-md w-[80%]">
            Done
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default SecurityContent;
