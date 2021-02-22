export const login = (user) =>
  localStorage.setItem("USER", JSON.stringify(user));

export const logout = () => localStorage.removeItem("USER");

export const getUser = () => JSON.parse(localStorage.getItem("USER"));

export const isAuthenticated = () => {
  const user = JSON.parse(localStorage.getItem("USER"));
  return user !== null;
};
