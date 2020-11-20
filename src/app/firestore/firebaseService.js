import { toast } from "react-toastify";
import firebase from "../config/firebase";
import { setUserProfileData } from "./firestoreService";

// this help us to use only ones the signin method
export function signInWithEmail(creds) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(creds.email, creds.password);
}

// signin out the current user
export function signOutFirebase() {
  return firebase.auth().signOut();
}

// we use async because after we register the user we can setup
// some initial properties such as display name that we are taking inside the form
export async function registerInFirebase(creds) {
  try {
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(creds.email, creds.password);

    // update the profile user attributes
    await result.user.updateProfile({
      displayName: creds.displayName,
    });

    // attemps to create new user
    return await setUserProfileData(result.user);
  } catch (error) {
    throw error; // throwing the error back to the form
  }
}

export async function socialLogin(selectedProvider) {
  let provider;
  if (selectedProvider === "facebook")
    provider = new firebase.auth.FacebookAuthProvider();

  if (selectedProvider === "google")
    provider = new firebase.auth.GoogleAuthProvider();

  try {
    const result = await firebase.auth().signInWithPopup(provider);
    console.log(result);
    // if new user with social account
    if (result.additionalUserInfo.isNewUser)
      await setUserProfileData(result.user);
  } catch (error) {
    toast.error(error.message);
  }
}

export function updateUserPassword(creds) {
  const user = firebase.auth().currentUser; // is async
  return user.updatePassword(creds.newPassword1);
}
