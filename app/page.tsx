import ProductDetails from "@/components/ui/ProductDetails";
import ProductSlider from "@/components/ui/ProductSlider";
import { shoes } from "@/data/Shoes";
import { Metadata } from "next";

// Meta Tags
export const metadata: Metadata = {
  title: "Shoes Store",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus commodi excepturi, dicta quos ab non quasi nostrum earum repellendus? Unde tempora velit exercitationem impedit voluptatum. Impedit, officia dolor! Error, doloribus.",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function Home() {
  return (
    <main className=" md:container flex flex-col xl:px-60 lg:mt-12 lg:flex-row lg:justify-between lg:gap-16 xl:gap-0 2xl:gap-16">
      <ProductSlider {...shoes} />
      <ProductDetails product={shoes} />
    </main>
  );
}
