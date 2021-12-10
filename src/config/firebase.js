// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,signOut } from "firebase/auth";

        import { getDatabase, ref, set } from "firebase/database";
// import {
//   getDatabase,
//   // onChildAdded,
//   // child,
//   // ref,
//   // push,
//   // update,
//   // set,
// } from "firebase/database";
// import { useEffect } from "react";
import { useDispatch } from "react-redux";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGUjzsb-64NC-AH2ptHmYDzSjoSydrrWs",
  authDomain: "boilerplate-c6b91.firebaseapp.com",
  databaseURL: "https://boilerplate-c6b91-default-rtdb.firebaseio.com",
  projectId: "boilerplate-c6b91",
  storageBucket: "boilerplate-c6b91.appspot.com",
  messagingSenderId: "78578397948",
  appId: "1:78578397948:web:d3e04b82ce5476852c1d79",
  measurementId: "${config.measurementId}"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


const database = getDatabase(app);

let userLogin = (obj ,navigate) => {
    return(dispatch)=>{

      signInWithEmailAndPassword(auth, obj.email, obj.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        dispatch({
          type: "login"
          
        });
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage, errorCode);
        });
    
}
};


let SignUp = (obj, navigate) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        
        let uid = user.uid;
        dispatch({
          type: "SIGNUPDATA",
          uid,
        });
        navigate("/");
        
        
        //  let uid = res.user.uid;
        console.log(uid);
        obj.uid = uid;
        const refrence = ref(database, `/users/${uid}`);
        set(refrence, obj).then(() => {
         
          alert("user created Successfully");
        });
        
        

// function writeUserData(obj.name, obj.email ,obj.password) {
//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email,
    
//   });
// }

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };
};

let Signout = ()=>{
  
  
  const dispatch = useDispatch();
signOut(auth).then(() => {
  dispatch(
    {
      type : "signout"
    }
  )
  console.log("succsess");
}).catch((error) => {
  alert("signout error");
});
}

export { userLogin, SignUp,Signout, auth };

// export {
 
  
  
//   database,
//   onChildAdded,
//   child,
//   ref,
//   push,
//   update,
//   set,
// };










