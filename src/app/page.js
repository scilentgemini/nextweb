import Image from "next/image";
import TopNav from "@/components/Header/TopNav/TopNav"
import Menu from "@/components/Header/Menu/Menu";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <TopNav />
        <Menu />
      </header>
    </div>
  );
}
