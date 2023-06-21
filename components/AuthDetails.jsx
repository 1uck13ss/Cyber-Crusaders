import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from "../utils/firebase.js";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => listen(); // Cleanup function to unsubscribe from the listener
  }, []);

    const userSignOut = () => {
        userSignOut(auth).then(() => {
            console.log('Sign out successfully');
        }).catch(error => console.log(error));
    }

  return (
    <div>{authUser ? <><p>{`Signed In as ${authUser.email}`}</p><button onClick = {userSignOut}>Sign Out</button></> : <p>Signed Out</p>}</div>
  );
};

export default AuthDetails;
