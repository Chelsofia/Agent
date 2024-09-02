"use client";
import HeaderWrapper from "@/components/sidebar/Header";
import { Button } from "@/components/button";
import { useState } from "react";
import Link from "next/link";
import Accordion from "@/components/accordion";
import { FaCircleExclamation } from "react-icons/fa6";

const Onboarding = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <HeaderWrapper
        onClick={() => setOpen(!open)}
        title={"Onboarding"}
        isTime={true}
      />
      <div className="min-h-screen mx-16 ms-64 p-8 bg-gray-50">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Welcome, Landest</h1>
            <p className="text-lg">
              Hi, Amos, welcome to Landest. Walk with us as we take you on a
              tour through your dashboard.
            </p>
          </div>
          <Button className="ml-4 rounded w-80">Take a Tour</Button>
        </div>

        <section className="flex items-center p-6">
          <FaCircleExclamation size={40} style={{ color: "#dc2626" }} />
          <div className="ml-6 flex-1">
            <h2 className=" font-semibold mb-2">
              Profile Information Incomplete
            </h2>
            <p className="text-gray-700 mb-4">
              Kindly input your basic details at the profile settings
            </p>
          </div>
          <Link href="/settings">
            <Button className="ml-4 rounded border border-primary bg-white text-primary">
              Update Profile
            </Button>
          </Link>
        </section>

        <section>
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">FAQ</h1>

            <Accordion title="Lorem ipsum dolor sit amet?">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                tincidunt justo eget ultricies fringilla. Phasellus blandit
                ipsum quis quam ornare mattis
              </p>
            </Accordion>

            <Accordion title="Lorem ipsum dolor sit amet" isOpen={true}>
              <p>
                Sed consectetur quam id neque fermentum accumsan. Praesent
                luctus vestibulum dolor, ut condimentum urna vulputate eget.
                Cras in ligula quis est pharetra mattis sit amet pharetra purus.
                Sed sollicitudin ex et ultricies bibendum.
              </p>
            </Accordion>

            <Accordion title="Lorem ipsum dolor sit amet">
              <p>
                Integer condimentum ipsum id imperdiet finibus. Vivamus in
                placerat mi, at euismod dui. Aliquam vitae neque eget nisl
                gravida pellentesque non ut velit
              </p>
            </Accordion>
          </div>
        </section>
      </div>
    </>
  );
};
export default Onboarding;
