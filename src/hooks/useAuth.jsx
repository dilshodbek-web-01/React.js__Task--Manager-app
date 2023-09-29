export const useAuth = () => {
    let token = localStorage.getItem("token");

    if (!token) {
        localStorage.clear();
        return true;
    }

    return false;
}

export const logout = (navigate) => {
    localStorage.removeItem("token")
    return navigate("/login");
}