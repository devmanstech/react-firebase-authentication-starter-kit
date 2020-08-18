import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
const config = {
  apiKey: 'AIzaSyAr46hrU6IM-P-Wh60hPkuin8d1fHMCI6w',
  authDomain: 'react-firebase-c9320.firebaseapp.com',
  databaseURL: 'https://react-firebase-c9320.firebaseio.com',
  projectId: 'react-firebase-c9320',
  storageBucket: 'react-firebase-c9320.appspot.com',
  messagingSenderId: '116319904713',
};
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) =>
    this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);


  user = (uid) => this.db.ref(`users/${uid}`);
  users = () => this.db.ref('users');
}
export default Firebase;
