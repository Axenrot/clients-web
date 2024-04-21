import React from "react";

const ClientsList = ({ clients = [] }: any) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Responsive container */}

      {/* Grid view for larger screens (md+) */}
      <div className="hidden lg:block">
        <div className="flex flex-col gap-4">
          {/* Header row */}
          <div className="grid grid-cols-10 gap-4 bg-gray-200 p-2 font-bold">
            {/* Header cells */}
            <div className="col-span-2">Name</div>
            <div>Title</div>
            <div className="col-span-2">Email</div>
            <div>Country</div>
            <div>Phone</div>
            <div className="col-span-3">Address</div>
          </div>

          {clients.map((client: any) => (
            <div key={client.id} className="grid grid-cols-10 gap-6">
              {/* Client data row */}
              <div className="col-span-2">{client.name}</div>
              <div>{client.title}</div>
              <div className="col-span-2">{client.email}</div>
              <div>{client.country}</div>
              <div>{client.phone}</div>
              <div className="col-span-3 truncate">{client.address}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Card view for smaller screens (sm-) - Same as before */}
      <div className="flex flex-col gap-6 lg:hidden">
        {clients.map((client: any) => (
          <div
            key={client.id}
            className="bg-neutral-light shadow-md rounded-full p-4 flex flex-col md:flex-row md:items-center md:justify-between"
          >
            {/* Client Information Section */}
            <div className="flex flex-row items-center gap-3">
              <h3 className="text-lg font-semibold text-gray-900">
                {client.name}
              </h3>
              <p className="text-gray-600">{client.title}</p>
              <p className="text-gray-600">{client.email}</p>
            </div>

            {/* Additional Details Section */}
            <div className="mt-4 md:mt-0 flex items-center text-gray-600">
              <p className="mr-4">
                <i className="fas fa-globe-americas mr-1"></i> {client.country}
              </p>
              <p className="mr-4">
                <i className="fas fa-phone mr-1"></i> {client.phone}
              </p>
              <p>
                <i className="fas fa-map-marker-alt mr-1"></i> {client.address}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsList;
