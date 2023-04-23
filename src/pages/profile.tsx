import {useUser} from "@auth0/nextjs-auth0/client";
import Head from "next/head";
import React, {useState, useEffect} from "react";
import {Navbar} from "@/components/Navbar/Navbar";
import {ProfileAlertsContainer, ProfileContainer} from "@/styles/Profile.styles";
import {Alert, Button, Col, Image, Row} from "antd";

// Define an interface for the user profile
interface UserProfile {
    name: string;
    email: string;
    picture: string;
    email_verified: boolean;
    userType: string;
}

function Profile() {
    const {user, error, isLoading} = useUser();
    const [isProfileComplete, setIsProfileComplete] = useState<boolean>(false);

    function VerifiedUserMessage() {
        if (user?.email_verified) {
            return <p>Seu email foi verificado.</p>;
        } else {
            return <p>Seu email não foi verificado.</p>;
        }
    }

    const fetchUserProfile = async (): Promise<UserProfile> => {
        try {
            const res = await fetch("/api/user");
            const json = await res.json();

            if (!res.ok) throw new Error(json.message);

            console.log(json);
            return json;
        } catch (error) {
            console.error("Error fetching user profile:", error);
            throw error;
        }
    };

    const isProfileCompleteFn = ({name, email, picture, userType, email_verified}: UserProfile): boolean =>
        !!(name && email && picture && userType && email_verified);


    const checkProfileComplete = async () => {
        try {
            const userProfile = await fetchUserProfile();
            setIsProfileComplete(isProfileCompleteFn(userProfile));
        } catch (error) {
            console.error("Error checking profile completeness:", error);
        }
    };

    useEffect(() => {
        if (user) {
            checkProfileComplete().then(r =>
                console.log("Profile complete:", isProfileComplete));
        }
    }, [user]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        <>
            <Head>
                <title>Vendo Logo - Perfil: {user?.name}</title>
                <meta name="description" content="Vendo Logo - Anunciou. Vendeu."/>
                <link rel="icon" href="/vendologo_favicon.png"/>
            </Head>
            <ProfileContainer>
                <Navbar/>
                <div>
                    <Row>
                        <Col span={24}>
                            <h1>Meu Perfil</h1>
                            <div>
                                <Image
                                    title={user?.name!}
                                    src={user?.picture!}
                                    width={100}
                                    height={100}
                                    preview={false}
                                />
                                <h2>{user?.name}</h2>
                                <h3>{user?.email}</h3>
                                <VerifiedUserMessage/>
                            </div>
                            <ProfileAlertsContainer>
                                {!user?.email_verified && (
                                    <Alert showIcon message="Seu email não foi verificado." type="warning"/>
                                )}
                                {!isProfileComplete && (
                                    <Alert showIcon
                                           message="Complete seu perfil"
                                           description="Seu perfil não está completo por favor preencha todos os dados."
                                           type="error"
                                           action={
                                               <Button size="small" danger>
                                                   Editar Perfil
                                               </Button>
                                           }/>
                                )}
                            </ProfileAlertsContainer>
                            <div>
                                <Button type="primary">Editar Perfil</Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <h1>Meus Anúncios</h1>
                        </Col>
                    </Row>
                </div>
            </ProfileContainer>
        </>
    );
};

export default Profile;
