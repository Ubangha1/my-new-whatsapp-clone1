import { SignUp } from "@clerk/nextjs"

export default function Page() {
    //return <SignUp />
    return <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />;
}