import { redirect } from "next/navigation";
import { defaultLocale } from "@/lib/i18n/config";

export default function RootPage() {
  // Don't redirect if there's an Identity callback in the URL
  // The client-side IdentityHandler will handle this
  redirect(`/${defaultLocale}`);
}
