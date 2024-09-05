import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import ErrorMessage from "./error.message";
import Label from "./label";
import { Controller } from "react-hook-form";

interface PhoneNumberProps {
  name: string;
  error: any;
  label?: string;
  control: any;
}

export const PhoneNumberInput = ({
  name,
  error,
  label,
  control,
}: PhoneNumberProps) => {
  return (
    <div>
      <Controller
        control={control}
        name={name}
        rules={{
          required: "Phone number is required",
          pattern: {
            value: new RegExp(/^(\+|\d)[0-9]{7,16}$/),
            message: `Phone number is required and must be valid`,
          },
        }}
        render={({ field: { onChange, value } }) => (
          <div>
           {label && <Label id={name} label={label} />}
            <div className="border border-gray-300 h-[48px] rounded-[12px]">
              <PhoneInput
                inputProps={{ placeholder: "Enter phone number" }}
                defaultCountry="ng"
                value={value}
                countrySelectorStyleProps={{
                  buttonClassName: "!border-0 mt-1 px-3",
                }}
                inputStyle={{ padding: 10 }}
                inputClassName="w-full block !h-[47px] !py-0 !bg-transparent focus:!border-2  !border-t-0 !border-b-0 !border-r-0  !border-l-1 !border-gray-300  focus:!border-primary !rounded-r-[12px]"
                onChange={(phone) => {
                  onChange(phone);
                }}
              />
            </div>
          </div>
        )}
      />
      {error && <ErrorMessage msg={error} />}
    </div>
  );
};
