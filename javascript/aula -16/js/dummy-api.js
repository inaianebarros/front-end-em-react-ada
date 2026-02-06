async function getUsers() {
  const response = await fetch("https://dummyapi.io/data/v1/user?created=1", {
    headers: {
      "app-id": "644019022390300000000001",
    },
  });
  const users = await response.json();
  console.log(users.data);
}

async function getUser() {
  const response = await fetch(
    "https://dummyapi.io/data/v1/user/644019022390300000000001",
    {
      headers: {
        "app-id": "644019022390300000000001",
      },
    }
  );
  const user = await response.json();
  console.log(user.data);
}

async function createUser() {
  try {
    await fetch("https://dummyapi.io/data/v1/user/create", {
      method: "POST",
      headers: {
        "app-id": "644019022390300000000001",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
      }),
    });
  } catch (error) {
    console.log("Erro ao criar usuário:", error);
  }
}
