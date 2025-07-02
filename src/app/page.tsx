import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen items-center justify-center pt-16">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold">Welcome</h1>
          <p className="text-muted-foreground">Get started by signing in.</p>
          <div className="flex justify-center gap-4">
            <Link href="/sign-in">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
