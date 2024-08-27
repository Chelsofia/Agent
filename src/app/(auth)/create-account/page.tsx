"use client";
import Link from "next/link";
import { Button, Input } from "@/components/form";
import { useForm } from "react-hook-form";
import Image from "next/image";

export default function CreateAccount() {
  const {
    watch,
    formState: { errors, isValid },
    handleSubmit,
    register,
  } = useForm();

  const values = watch();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center mb-4">
        <Image
          src="/images/logo black.png"
          alt="Landest Logo"
          quality={100}
          width={120}
          height={120}
          className="object-contain"
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
      >
        <div className="flex flex-col items-center text-center mb-6">
          <h2 className="text-2xl font-semibold">Create Account</h2>
          <p className="text-gray-600">Welcome Onboard!</p>
        </div>

        <div className="space-y-4">
          <Input
            id="email"
            type="email"
            label="Email Address"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Email must be valid",
              },
            })}
            error={errors.email?.message}
          />
          <Input
            id="new-password"
            type="password"
            label="New Password"
            placeholder="New password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/,
                message:
                  "Password must contain at least 8 characters, including one lowercase, one uppercase, one digit, and one special character.",
              },
            })}
            error={errors.password?.message}
          />
          <Input
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="Confirm password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            error={errors.confirmPassword?.message}
          />
        </div>

        <div className="mt-6">
          <Button
            type="submit"
            className="w-full py-2 text-white rounded"
          >
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
}
