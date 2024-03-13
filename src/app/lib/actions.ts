"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export const func1 = () => {
  return "";
};

export const signInAsync = async (providerName: string) => {
  try {
    await signIn("cloudhospital");
  } catch (error) {
    console.warn(error);
  }
};

//?
export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const success = await signIn("credentials", formData);
    console.log({ prevState, success });
    return undefined;
  } catch (error) {
    console.log({ error });
    if (error instanceof Error) {
      const { type, cause } = error as AuthError;
      switch (type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        case "CallbackRouteError":
          return cause?.err?.toString();
        default:
          return "Something went wrong.";
      }
    }

    throw error;
  }
}
