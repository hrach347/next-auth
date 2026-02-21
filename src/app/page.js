import Link from "next/link";
import Button from "@/components/ui/Button";
import Image from "@/components/ui/Image";
import Title from "@/components/ui/Title";

export default function Home() {
  return (
    <div>
      <Title>Welcome To Next Auth
        <Image width="60" src="/images/logo-sm.png" />
      </Title>
      <Link href="/sign-in">
        <Button>Go Sign In</Button>
      </Link>
    </div>
  );
}
