import { initialTickets } from "@/data";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);
  if (!ticket) return <div>Ticket not found</div>;
  const { title, content, status } = ticket;
  return (
    <div>
      <h2 className="text-lg">{title}</h2>
      <p className="text-sm">{content}</p>
      <span>{status}</span>
    </div>
  );
};

export default TicketPage;
