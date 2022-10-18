import useSWR from 'swr'

import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie'
import { useRouter } from 'next/router';
// const router = useRouter()

async function fetcher(url, body) {
    return await fetch(url, {
        method: "POST",
        body: body,
    }).then((res) => res.json())
  }


  export function LoggedIn() {
    if (Cookies.get("user-token")) {
        return true;
    } else {
        return false
    }
  }

  export function getLoggedInUser() {
    if (Cookies.get('user-token')) {
        return jwtDecode(Cookies.get('user-token')).data
    } else {
        return "Logged Out"
    }
  }

  export function logUserOut(userId) {
    if (LoggedIn) {
        Cookies.remove('user-token');
        router.push('/auth')
    }
  }

  export function verifyAuth(location, router) {
    if (Cookies.get('user-token')) {
        router.push(location)
    } else {
        router.push("/auth")
    }
  }