export const login = (user) =>
  localStorage.setItem("USER", JSON.stringify(user));

export const logout = () => localStorage.removeItem("USER");

export const getUser = () => JSON.parse(localStorage.getItem("USER"));
