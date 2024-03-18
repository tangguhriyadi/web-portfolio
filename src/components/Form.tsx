import React, { useCallback, useRef, useState } from "react";
import { Input } from "./ui/input";
import { ArrowRightIcon, MailIcon, MessageSquare, User } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { cn } from "../lib/utils";
// import "sweetalert2/src/sweetalert2.scss";

const Form = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const sendEmail = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      setIsLoading(true);
      if (formRef.current) {
        console.log(formRef.current);
        emailjs
          .sendForm("service_2x5kadc", "template_hpz6mfq", formRef.current, {
            publicKey: "yrjLMtq8lJ3ycuIsF",
          })
          .then(() => {
            Swal.fire({
              title: "Email Sent !",
              text: "I'll reply your message soon !",
              icon: "success",
            }),
              formRef.current?.reset();
          })
          .catch(() =>
            Swal.fire({
              title: "Opps, Something went wrong !",
              text: "Please try again in a few minute",
              icon: "error",
            }),
          )
          .finally(() => setIsLoading(false));
      }
    },
    [formRef, isLoading],
  );
  return (
    <form
      ref={formRef}
      className={cn("flex flex-col gap-y-4")}
      onSubmit={sendEmail}
    >
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" name="name" required />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          required
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea
          placeholder="Type Your Message Here."
          name="message"
          required
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button type="submit" className="flex items-center gap-x-1 max-w-[166px]">
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
      {isLoading && (
        <div className="overlay">
          <div className="overlay__inner">
            <div className="overlay__content">
              <span className="spinner"></span>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default Form;
