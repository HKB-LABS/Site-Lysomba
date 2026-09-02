import { redirect } from "next/navigation";
import { defaultLocale } from "@/lib/i18n";

// Le proxy redirige déjà « / » vers la bonne langue ; ceci n'est qu'un filet
// de sécurité si la requête atteint la page sans passer par le proxy.
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
