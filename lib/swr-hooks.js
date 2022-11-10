import useSWR from 'swr'
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie'
// require('')

async function fetcher(url) {
    return await fetch(url, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${Cookies.get('user-token')}`
       }, 
    }).then((res) => res.json())
  }

  export function GetUser(userId) {
    // formData.append('userId', userId)
    const {data, error, isValidating} = useSWR(`http://192.168.1.51/bearcats_connect/getUser.php?userId=${userId}`, fetcher )
    return {
      user: data,
      isValidating,
      error
    };
  }

  export function getPosts(refname, refId) {
    // ! refname means the route name or (either userId or postId) while refId means the id we are targeting for either postId or userId
    const {data, error, isValidating} = useSWR(`http://192.168.1.51/bearcats_connect/getPost.php?${refname}=${refId}`, fetcher )
    return {
      posts: data,
      isValidating,
      error
    };
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

  export function getFeed (portion) {
    // ! Portion is either 'following' or 'all'
    const {data, error, isValidating} = useSWR(`http://localhost/bearcats_connect/getFeed.php?portion=${portion}`, fetcher )
    return {
      feed: data,
      feedValidating: isValidating,
      error
    };
  }

  export function getPost (pid) {
    // ! pid is post ID'
    const {data, error, isValidating} = useSWR(`http://192.168.1.51/bearcats_connect/getPost.php?postId=${pid}`, fetcher )
    return {
      post: data,
      postValidating: isValidating,
      error
    };
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