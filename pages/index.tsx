import { Inter } from "next/font/google";
import Home from "@/app/components/screens/home/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return <Home />;
}
