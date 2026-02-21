"use client"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Button from "@/components/ui/Button"
import Image from "@/components/ui/Image"

export default function SignIn() {
    const { status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === "authenticated") router.replace("/dashboard")
    }, [status, router])

    if (status === "loading") return <div>Loading...</div>

    return (
        <Button onClick={() => signIn("google")}>
            <Image width="35" height="35" src="/images/google.png" />
            Sign in with Google
        </Button>
    )
}
