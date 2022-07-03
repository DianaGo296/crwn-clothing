import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// firebase config
const firebaseConfig = {
	apiKey: "AIzaSyD52N6d9doMR-Y0HIpH-AvT6Uxke0hdNTs",
	authDomain: "crwn-clothing-db-f3eea.firebaseapp.com",
	projectId: "crwn-clothing-db-f3eea",
	storageBucket: "crwn-clothing-db-f3eea.appspot.com",
	messagingSenderId: "902641334869",
	appId: "1:902641334869:web:d16f1af087475d32df72dc"
};

// "start" firebase 
export const firebaseApp = initializeApp(firebaseConfig);

// google sign in auth class
const provider = new GoogleAuthProvider();

// custom google parameters (what we want to check (email account))
provider.setCustomParameters({
	prompt: "select_account"
});

// get google authentication (gmail account)
export const auth = getAuth();

// sign in with google popup -> cheking google account + our custom parameters
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// create DB
export const db = getFirestore();

// store user into data base
export const createUserDocumentFromAuth = async (userAuth) => {
	// get user reference
	const userDocRef = doc(db, 'users', userAuth.uid);

	// get user data - allow to check if user exists and access the data
	const userSnapShop = await getDoc(userDocRef);

	// check if user data exists or not
	if (!userSnapShop.exists()) {
		// if false -> create/set the document with the data from userAuth in the users collection in userDocRef (db)
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		// set document (create user)
		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt
			});
		} catch (error) {
			console.log('something went wrong while creating the user', error.message);
		}

		// if true -> return userDocRef
		return userDocRef;
	}






}