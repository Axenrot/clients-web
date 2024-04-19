const ClientsList = ({ clients = [] }: { clients: Array<any> }) => {
  return (
    <div className="p-4 md:p-6 flex gap-6 bg-bleu-dark">
      {clients.map((client: any, index: number) => (
        <div key={`client-${index}`}>AAA</div>
      ))}
    </div>
  );
};

export default ClientsList;
