import { GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    setLoading(true)
    return signOut(auth);
  };

  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  };

  const updateUserInfo = (name, photo) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const authInfo = {
    user,
    loading,
    createUser,
    loginUser, 
    logOutUser,
    googleLogin,
    updateUserInfo
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log(currentUser);

      if (currentUser?.email) {
        const user = { email: currentUser.email };
        axios
          .post("https://assignment-11-server-rouge-ten.vercel.app/jwt", user, { withCredentials: true })
          .then((res) => {
            // console.log("login", res.data);
            setLoading(false);
          });
      }
      else {
        axios
          .post("https://assignment-11-server-rouge-ten.vercel.app/logout", {}, { withCredentials: true })
          .then((res) => {
            // console.log("logout", res.data);
            setLoading(false);
          });
      }

      return () => {
        unsubscribe();
      };
    });
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
