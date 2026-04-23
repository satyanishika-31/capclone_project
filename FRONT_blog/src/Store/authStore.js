import axios from "axios";
import { create } from "zustand";

export const useAuth = create((set) => ({
  currentUser: null,
  loading: false,
  isAuthenticated: false,
  error: null,
  login: async (userCred) => {
    //const { role, ...userCredObj } = userCredWithRole;
    try {
      //set loading true
      set(stat=>({...stat,loading:true}))
      //make api call
      let res=await axios.post("http://localhost:5000/auth/login",userCred,{withCredentials:true})
      //update state
      const loggedInUser = res.data?.payload || res.data?.user || res.data;
      set((stat) => ({
        ...stat,
        loading: false,
        isAuthenticated: true,
        currentUser: loggedInUser,
        error: null,
      }));
    } catch (err) {
      console.log("err is ", err);
      set({
        loading: false,
        isAuthenticated: false,
        currentUser: null,
        //error: err,
        error: err.response?.data?.error || "Login failed",
      });
    }
  },
  logout: async () => {
    try {
      //set loading state
      //make logout api req
      //update state
    } catch (err) {
      set({
        loading: false,
        isAuthenticated: false,
        currentUser: null,
        error: err.response?.data?.error || "Logout failed",
      });
    }
  },
}));