import React from 'react'
import jwt_decode from 'jwt-decode'
const index = () => {
    
    const store = {};
    store.setJWT = function (data) {
        this.JWT = data;
      };
    const getToken = async () => {
        const res = await fetch("http://localhost/bearcats_connect/jwt.php", {
            method: "POST"
        })

        if (res.status >= 200 && res.status <= 299) {
            const jwt = await res.text()
            console.log(jwt)
        } else {
            console.log(res.status, res.statusText)
        }
    }

    const useJwt = async () => {
        const res = await fetch("http://localhost/bearcats_connect/useJwt.php", {
            method: "POST",
            headers: {
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2NjU4NzAwODMsImlzcyI6InlvdXIuZG9tYWluLm5hbWUiLCJuYmYiOjE2NjU4NzAwODMsImV4cCI6MTY2NTg3MDQ0MywidXNlck5hbWUiOiJ1c2VybmFtZSJ9.wlz6f7GQ1JiDxsNHRfOq9xSKu_B6-HeK7HYzStR6xpUNvYLvMDSI7xOqjqdqBGJbm2OQ4tsvN2keGLTjqCY5cQ`
            }
        })

        console.log(await res.text())
    }

  return (
    <div>
        
        <button onClick={() => getToken()}>Hello Guys</button>
        <button onClick={() => useJwt()}>Use Jwt</button>
        <button onClick={() => {
            console.log(jwt_decode("ASCushhQD09voP6JO02-FtA0woxRjFA7_welxZxTrABABYy-HXp9Q36WW-pkG3rJ39ShJcCLCIDgFfPZhjYv0Pz9ptTTpfrLu1-ly2WSYZqZWGjcXvQV0dpzT6X_fBj8YCFevAo"))
        }}>deocde</button>
    </div>
  )
}

export default index