import { Inter, Lusitana } from "next/font/google";

const lusitana = Lusitana({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
});
const inter = Inter({ subsets: ["latin"], display: "swap", weight: ["700"] });

export { lusitana, inter };
