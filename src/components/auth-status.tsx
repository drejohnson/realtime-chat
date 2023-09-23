import { getAuthSession } from "@/lib/auth";

export default async function AuthStatus() {
  const session = await getAuthSession();
  return (
    <div className="absolute top-5 w-full flex justify-center items-center">
      {session && (
        <p className="text-sm">Signed in as {session.user?.userName}</p>
      )}
    </div>
  );
}
