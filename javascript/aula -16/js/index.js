// Fetch API

// then e catch
fetch("https://viacep.com.br/ws/68040290/json/")
  .then((response) => response.json()) // .json é uma promise por isso
  .then((json) => console.log(json)) // é necessário encadear outro .then
  .catch((error) => console.log(error));

// assyn e await
async function getCep() {
  try {
    const response = await fetch("https://viacep.com.br/ws/68040290/json/");
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Fim da requisição");
  }
}

getCep();
