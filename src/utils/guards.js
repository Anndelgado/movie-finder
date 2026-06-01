export const getUser = () => {
  return JSON.parse(
    localStorage.getItem("user")
  );
};

export const isAuthenticated = () => {
  return !!getUser();
};

export const isAdmin = () => {
  return getUser()?.role === "admin";
};

export const logout = () => {
  localStorage.removeItem("user");
};