import {useUser} from "@auth0/nextjs-auth0/client";
import SignIn from "@/components/SignIn/SignIn";
import SignOut from "@/components/SignOut/SignOut";

export default function Auth() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        <>
            {user ? (
                <>
                    <h2>{user.name}</h2>,
                    <SignOut />
                </>
            ) : (
                <SignIn />
            )}
        </>
    )
}