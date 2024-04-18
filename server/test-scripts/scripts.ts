async function testLogin(email: string, password: string) {
  const body = {
    email,
    password,
  };
  console.log("body", body);
  try {
    const response = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log(response.headers.get("Set-Cookie"));
    const data = await response.json();
    console.log("data:\n", data);
  } catch (error) {
    console.error("error during login test", error);
  }
}

testLogin("test@example.com", "password");
