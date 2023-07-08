import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "./styles/WishList.css";

const Wishlist = ({ user, firestore }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const wishlistRef = firestore
      .collection("wishlist")
      .where("userId", "==", user.uid);
    const unsubscribe = wishlistRef.onSnapshot((snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setWishlist(items);
    });

    return () => {
      unsubscribe();
    };
  }, [firestore, user]);

  return (
    <div className="WishList-list">
      {wishlist.map((game) => (
        <p key={game.id}>{game.name}</p>
      ))}
    </div>
  );
};

export default Wishlist;
