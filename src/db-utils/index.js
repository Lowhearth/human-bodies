export const login = async (user) => {
  const response = await fetch('http://localhost:4000/login/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) return 'user created';
};
