"use client"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Button from "@/components/ui/Button"
import Title from "@/components/ui/Title"
import Link from "next/link"

export default function Dashboard() {
    const { data, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === "unauthenticated") router.replace("/sign-in")
    }, [status, router])

    if (status === "loading") return <div>Loading...</div>

    return (
        <div>
            <Title>
                Welcome, {data?.user.name}
                <img width="70" src={data?.user.image} />
            </Title>

            <p>See current user session in <Link href="/api/auth/session">/api/auth/session</Link></p>
            <Button onClick={() => { signOut() }}>Sign Out</Button>
        </div>
    )
}
