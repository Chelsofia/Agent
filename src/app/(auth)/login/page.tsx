"use client";
import Link from "next/link";
import { Button, Input } from "@/components/form";
import { useForm } from "react-hook-form";
import Image from "next/image";

export default function Login() {
  const {
    formState: { isValid, errors },
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // showModal(true);
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
          <h2 className="text-2xl font-semibold">Sign In</h2>
          <p className="text-gray-600">Enter login details to proceed</p>
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
            id="password"
            type="password"
            label="Password"
            placeholder="Your password"
            {...register("password", { required: "Password is required" })}
            error={errors.password && "Password is required"}
            isIcon={false} 
          />
        </div>

        <div className="flex justify-end mt-4">
          <Link
            href="/forgot-password"
            className="text-sm font-medium no-underline hover:text-blue-600"
          >
            Forgot password?
          </Link>
        </div>

        <div className="mt-6">
          <Button type="submit" className="w-full py-2 text-white rounded">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
