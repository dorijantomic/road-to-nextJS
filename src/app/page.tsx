import { ticketsPath } from "@/path";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="text-lg">
      <h2>Home Page</h2>
      <Link href={ticketsPath()}>Tickets</Link>
    </div>
  );
};

export default HomePage;
