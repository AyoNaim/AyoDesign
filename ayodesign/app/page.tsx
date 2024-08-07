import Image from "next/image";
import { Room } from "./Room";
import { CollaborativeApp } from "./CollaborativeApp";
import Live from "@/components/Live";

export default function Home() {
  return (
    <Room>
      <div className="flex justify-center items-center">
        <Live />
      </div>
    </Room>
  );
}
