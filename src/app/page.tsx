import { auth, signIn, signOut } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <h1>Hello World</h1>
      {session && (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button
            className="bg-blue-500 text-white p-2 rounded-md"
            type="submit"
          >
            Signout
          </button>
        </form>
      )}
      {!session && (
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button
            className="bg-blue-500 text-white p-2 rounded-md"
            type="submit"
          >
            Signin with Google
          </button>
        </form>
      )}
    </div>
  );
}
