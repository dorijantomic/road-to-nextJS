import { ticketsPath } from "@/path";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Home Page</h2>
        <p className="text-sm text-muted-foreground">
          Your home place to start
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <Link className="underline" href={ticketsPath()}>
          Tickets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
