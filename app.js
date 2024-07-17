
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,

} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDq59AgEq2O4e5aBjjA4vwtmLcpDKKAVCc",
    authDomain: "first-project-b111a.firebaseapp.com",
    projectId: "first-project-b111a",
    storageBucket: "first-project-b111a.appspot.com",
    messagingSenderId: "902693071907",
    appId: "1:902693071907:web:12b32078c523b62f67d596",
    measurementId: "G-M8DJKR8RKZ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const signup_Email = document.getElementById('signup_Email')
const signup_passward = document.getElementById('signup_passward')
const signup_btn = document.getElementById('signup_btn')
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('user is logged in')
        const uid = user.uid;

    } else {
        console.log('user is not logged in ')

    }
});


signup_btn.addEventListener("click", createUserAccount)

function createUserAccount() {
    createUserWithEmailAndPassword(
        auth,
        signup_Email.value,
        signup_passward.value,
    )
        .then((userCredential) => {

            const user = userCredential.user;
            console.log('user==> ', user)

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });


}