const API_URL = "http://localhost:3000/users";

export const loginUser = async (email, password) => {
  const response = await fetch(API_URL);
  const users = await response.json();

  return users.find(
    (user) =>
      user.email === email &&
      user.password === password
  );
};

export const registerUser = async (userData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  return await response.json();
};