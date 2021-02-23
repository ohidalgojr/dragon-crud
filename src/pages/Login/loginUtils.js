import { Mock } from "../../consts/testData";

export const isInvalidUser = (user) => {
  const { username, password } = user;
  return !username || !password;
};

export const isMockUser = (user) => {
  const { username, password } = user;
  return username === Mock.username && password === Mock.password;
};
