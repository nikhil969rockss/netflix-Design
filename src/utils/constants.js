export const validate = (email,password) =>{
  //check email first , then password if both are valid then return null

  const emailVerification =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const passwordVerification = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if(emailVerification && passwordVerification){
    return true;
  }
  else{
    return false;
  }
  
}

export const NETFLIX_LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        
export const NETFLIX_BACKGROUND_COVER ="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg"


export const BROWSER_HEADER_MENU_LIST =[ "Home","Tv Shows","Movies","New & Popular","My List",]


export const LOGIN_USER_LOGO = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"

export const API_KEY = ""

export const MOVIE_url = `https://api.themoviedb.org/3/movie/now_playing?page=1`;





export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION}`
  }
};

