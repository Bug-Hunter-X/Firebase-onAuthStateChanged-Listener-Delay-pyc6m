```javascript
async function handleAuth() {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        console.log('User signed in:', user);
        resolve(user); 
      } else {
        console.log('User signed out');
        resolve(null); 
      }
    });
  });
}

async function myFunction(){
  const user = await handleAuth();
  if (user) {
      //proceed with actions only when the user is completely authenticated
  }
}

```