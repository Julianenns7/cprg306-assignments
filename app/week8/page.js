import React from "react";
import { useUserAuth } from "./_utils/auth-context";
 

const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

async function handleSignIn() {
    try {
        await gitHubSignIn();
    } catch (error) {
        console.log(error);
    }
}
 

async function handleSignOut() {
    try {
        await firebaseSignOut();
    } catch (error) {
        console.log(error);
    }
}
 

 

 return (
    <p>
        Welcome, {user.displayName} ({user.email})
    </p>
    )
