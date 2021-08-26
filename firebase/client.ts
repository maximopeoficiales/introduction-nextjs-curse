// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup, UserCredential } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { UserGithub } from "./entitys/UserGithub";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAV5ev0Xwj-bDKpX3Xc62XZKiSXDS9VwU0",
    authDomain: "devter-c23d3.firebaseapp.com",
    projectId: "devter-c23d3",
    storageBucket: "devter-c23d3.appspot.com",
    messagingSenderId: "160919616337",
    appId: "1:160919616337:web:260292f5bc89a761b83170",
    measurementId: "G-LQRJZYX2G8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);


const mapUserFromFirebaseAuthToUser = (user: UserCredential): UserGithub => {
    const { user: { email, displayName, photoURL }, } = user;
    const userGithub = new UserGithub();
    userGithub.avatar = photoURL ?? "";
    userGithub.username = displayName ?? "";
    userGithub.email = email ?? "";
    return userGithub;
}

export const onAuthStateChanged = (onChange: (user: UserGithub) => void) => {

    return getAuth().onAuthStateChanged((user: any) => {
        if (user) {
            const normalizedUser = mapUserFromFirebaseAuthToUser({ user } as any);
            onChange(normalizedUser);
        }

    });

}
export const loginWithGithub = async (): Promise<UserGithub> => {
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth();
    let user = await signInWithPopup(auth, githubProvider);
    return mapUserFromFirebaseAuthToUser(user);
}