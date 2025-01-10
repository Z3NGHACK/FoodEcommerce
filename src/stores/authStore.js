import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth',{ 
    state: () => ({
        isAuthenticated: false,
        userName: '',
        userEmail: ''
    }),
    actions: {
        login(name, email){
            this.isAuthenticated = true;
            this.userName = name;
            this.userEmail = email;
        },
        logout(){
            this.isAuthenticated = false;
            this.userName= '';
            this.userEmail= '';
            localStorage.removeItem("isLogginIn");
        },
    },

})
