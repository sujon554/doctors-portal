import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut , updateProfile } from "firebase/auth";


//initializeApp firebase app Call
import initializeFirebase from '../Pages/Login/Login/Firebase/firebase.init';
initializeFirebase();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState(' ');
  const googleProvider = new GoogleAuthProvider();


    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setAuthError('');
          const newUser = { email, displayName: name };
          setUser(newUser);
          //send name t firebase after creation
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
          }).catch((error) => {
            
          });
          history.replace('/');
          })
          .catch((error) => {
            
            setAuthError(error.message);
            // ..
          })
            .finally(() => setIsLoading(false));
    }


    //observe user state. (all tab update here)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              
                setUser(user);
            } else {
              // User is signed out
              setUser({})
            }
            setIsLoading(false);
          });
        return () => unsubscribe;
    }, [])

    const logInUser = (email, password, location, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
          })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally(() => setIsLoading(false));
    }

  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      setAuthError('');
    }).catch((error) => {
      setAuthError(error.message);
    })
    .finally(() => setIsLoading(false));
  }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            //signOut successful

        }).catch((error) => {
            //an error happened.
        })
        .finally(() => setIsLoading(false));
    }




    return {
        user,
        registerUser,
        logInUser,
      logOut,
      signInWithGoogle,
        authError,
        isLoading
    }
};

export default useFirebase;

