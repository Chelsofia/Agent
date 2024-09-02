import Image from "next/image";
import { useState } from "react";
import { FiImage } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { Button, Input, Select } from "@/components/form";
import TextArea from "@/components/form/textarea";
import HeaderWrapper from "@/components/sidebar/Header";
import { FaCheck, FaChevronRight } from "react-icons/fa";

export default function profileSection() {
  const [open, setOpen] = useState<boolean>(false);
  const [image, setImage] = useState<string>("/images/racheal.png");
  const [preview, setPreview] = useState<string>(image);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    watch,
  } = useForm();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(file.name);
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <HeaderWrapper
        onClick={() => setOpen(!open)}
        title={"Wallet"}
        isTime={true}
      />

      <div className="bg-white p-4 rounded-lg text-gray-700 mt-4">
        <div className="flex flex-row items-start pb-4 mb-4">
          <div className="flex-1 mr-4">
            <div>
              <h1 className="text-gray-900">Profile Photo</h1>
              <p>This image will be displayed on your profile</p>
            </div>
            <label
              htmlFor="file-input"
              className="mt-4 inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-all duration-300"
            >
              <FiImage className="mr-2" /> Change Photo
            </label>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
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
        </div>
        <section className="flex flex-row">
          <div className="flex-1 mr-4">
            <div>
              <h1 className="text-blue-600">Edit Profile</h1>
              <p>Update your personal details here.</p>
            </div>
          </div>
          <div className="flex-1">
            <form className="space-y-6">
              <div className="flex space-x-4">
                <div className="flex-1">
                  <Input
                    id="first-name"
                    type="text"
                    label="First Name"
                    placeholder="Adekemi"
                    {...register("firstName", { required: true })}
                    error={errors.firstName && "First name is required"}
                  />
                </div>
                <div className="flex-1">
                  <Input
                    id="last-name"
                    type="text"
                    label="Last Name"
                    placeholder="Racheal"
                    {...register("lastName", { required: true })}
                    error={errors.lastName && "Last name is required"}
                  />
                </div>
              </div>

              <Input
                id="email"
                type="email"
                label="Email"
                placeholder="Enter your email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                error={errors.email && "Email is required and must be valid"}
              />

              <Input
                id="phone"
                label="Phone Number"
                placeholder="Enter your phone number"
                {...register("phone", { required: true })}
                error={
                  errors.phone && "Phone number is required and must be valid"
                }
              />

              <Input
                id="dob"
                label="Date of Birth"
                type="date"
                {...register("dob", { required: true })}
                error={errors.dob && "Date of Birth is required"}
              />

              <Select
                name="nationality"
                label="Nationality"
                control={control}
                options={[
                  {
                    label: "Nigeria",
                    value: "nigeria",
                  },
                ]}
                error={errors.nationality && "Nationality is required"}
              />

              <TextArea
                id="address"
                label="Residential Address"
                placeholder="Enter your residential address"
                {...register("address", { required: true })}
                error={errors.address && "Address is required"}
              />
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
