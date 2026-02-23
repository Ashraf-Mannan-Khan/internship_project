"use client";
import BackwardButton from "@/component/button/backward_button/backward";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function Details() {
  return (
    <div className=" mx-auto h-dvh max-[400px]:w-full sm:w-xl border md:w-xl  ">
      <div className="p-4 w-full h-1/5 rounded-b-4xl  bg-[#46c2de] ">
        <BackwardButton text="Book Appointment" />
      </div>
      <Card className="relative -top-10 mx-auto w-full flex max-w-lg h-fit pt-0 md:-top-10 ">
        <CardHeader className="flex flex-col items-start justify-center  w-8/12  h-auto   ">
          <CardTitle>Dr Prakash</CardTitle>
          <CardDescription>Opthalmologist</CardDescription>
          <Badge className="w-fit bg-[#e6f6e6] text-[#18ab00] p-0">MBBS,MS(Surgeon)</Badge>
          <CardContent className="flex justify-start p-0">
            <p >Fellow of Sanskara netralaya, chennai.</p>
          </CardContent>
        </CardHeader>

        <CardFooter className=" max-[400px]:w-80 max-[400px]:h-auto sm:w-fit md:h-fit pb-0 m-auto">
          <Image
            src="/doctor.png"
            alt="Doctor Image"
            width={100}
            height={100}
            className="rounded-xl overflow-hidden object-contain "
          />
        </CardFooter>
      </Card>
    </div>
  );
}
