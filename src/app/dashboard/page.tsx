import { auth } from "@clerk/nextjs/server"

export default async function DashboardPage() {
  const { userId } = auth()

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="text-muted-foreground">
        {userId ? "You're signed in!" : "You are not signed in."}
      </p>
    </div>
  )
}
