"use client";
import Image from "next/image";
import { FiImage } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button, Input } from "@/components/form";


const ProfileContent: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const [image, setImage] = useState<string>("/images/Avatars.png");
  const [preview, setPreview] = useState<string>(image);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="bg-white p-4 rounded-lg text-gray-700 mt-4">
        <div className="flex flex-row items-start pb-4 mb-4">
          <div className="flex-1 mr-4">
            <div>
              <h1 className="font-bold text-gray-900">Profile Photo</h1>
              <p>This image will be displayed on your profile</p>
            </div>
            <label
              htmlFor="file-input"
              className="mt-4 inline-flex items-center px-4 py-2  border border-secondary text-secondary rounded-lg cursor-pointer transition-all duration-300"
            >
              <FiImage className="mr-2 text-secondary" /> Change Photo
            </label>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>
        <section className="flex flex-row">
          <div className="flex-1 mr-4">
            <div>
              <h1 className="font-bold">Profile Information</h1>
              <p>Update your personal details here.</p>
              <br></br>
              <Button onClick={handleSubmit(onSubmit)} className="rounded-md">Save Changes</Button>
            </div>
          </div>

          <div className="flex-1">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="relative h-32 w-32">
                <Image
                  src={preview}
                  alt="user-photo"
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                  className="rounded-lg"
                />
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <Input
                    id="first-name"
                    type="text"
                    label="First Name"
                    placeholder="Amos"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    error={errors.firstName?.message}
                  />
                </div>
                <div className="flex-1">
                  <Input
                    id="last-name"
                    type="text"
                    label="Last Name"
                    placeholder="Moses"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    error={errors.lastName?.message}
                  />
                </div>
              </div>

              <Input
                id="email"
                type="email"
                label="Email"
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
                id="phone"
                label="Phone Number"
                placeholder="Enter your phone number"
                {...register("phone", { required: "Phone number is required" })}
                error={errors.phone?.message}
              />

              <Input
                id="bank-account"
                type="text"
                label="Bank Account Name"
                placeholder="Amos Moses"
                {...register("bankAccount", {
                  required: "Bank account name is required",
                })}
                error={errors.bankAccount?.message}
              />
              <div className="flex space-x-4">
                <Input
                  id="bank-account-number"
                  label="Bank Account Number"
                  placeholder="043216432"
                  {...register("bankAccountNumber", {
                    required: "Bank account number is required",
                  })}
                  error={errors.bankAccountNumber?.message}
                />

                <Input
                  id="bank-name"
                  type="text"
                  label="Bank Name"
                  placeholder="Gt Bank"
                  {...register("bankName", {
                    required: "Bank name is required",
                  })}
                  error={errors.bankName?.message}
                />
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileContent;
