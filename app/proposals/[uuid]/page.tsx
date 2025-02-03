import { notFound } from "next/navigation";

// This is a type for the expected UUID format
type Props = {
  params: {
    uuid: string;
  };
};

// Function to validate UUID format
const isValidUUID = (uuid: string) => {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};

export default function ProposalPage({ params }: Props) {
  // Validate UUID format
  if (!isValidUUID(params.uuid)) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Learning Proposal</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          {/* Your proposal content will go here */}
          <p>Proposal ID: {params.uuid}</p>
        </div>
      </main>
    </div>
  );
}
