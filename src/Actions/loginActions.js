export const login=()=>{
    return {
        type:"UPDATE_STATUS",
        payload:true
    }
}

export const logout=()=>{
    return {
        type:"UPDATE_STATUS",
        payload:false
    }
}

export const saveUser=(user)=>{
    return {
        type:"UPDATE_USER",
        payload:user
    }
}