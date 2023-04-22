import {useUser} from "@auth0/nextjs-auth0/client";
import SignIn from "@/components/SignIn/SignIn";
import SignOut from "@/components/SignOut/SignOut";
import {MenuItem} from "@/components/Navbar/styles";
import styled from "styled-components";

export default function Auth() {
    const { user, error, isLoading } = useUser();

    const AuthWrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
      
        a {
            margin-left: 1rem;
        }
    `;

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;


    return (
        <AuthWrapper>
            {user ? (
                <>
                    <MenuItem href="/profile">{user?.name}</MenuItem>
                    <SignOut />
                </>
            ) : (
                <SignIn />
            )}
        </AuthWrapper>
    )
}