import { authenticate } from "@/api/auth";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TypographyH2 } from "@/components/ui/text/typographyH2";
import { TypographyLink } from "@/components/ui/text/typographyLink";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  otp: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function AuthSection() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      otp: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const response = await authenticate({
        email: data.email,
        password: data.password,
        code: data.otp,
      });

      console.log("Authentication successful:", response);

      toast({
        title: "Authentication successful",
        description: "You have been successfully authenticated.",
      });
    } catch (error) {
      console.error("Authentication error:", error);

      toast({
        title: "Authentication failed",
        description: "Failed to authenticate. Please try again.",
      });
    }
  }

  return (
    <section className="flex flex-col border-2 p-12 rounded-lg w-[25rem] items-center gap-4 justify-start">
      <TypographyH2>Conta SM</TypographyH2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input label="E-mail" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input label="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input label="OTP Code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <TypographyLink>Esqueci a senha</TypographyLink>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </section>
  );
}
