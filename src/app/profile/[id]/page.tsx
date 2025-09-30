import AuthCard from "@/components/AuthCard";

export default async function UserProfile({ params }: any) {
  const { id } = await params;

  return (
    <AuthCard title="User Profile">
      <p className="text-lg">
        Profile ID:{" "}
        <span className="p-2 rounded bg-green-400 text-black ml-2 font-semibold">
          {id}
        </span>
      </p>
    </AuthCard>
  );
}
