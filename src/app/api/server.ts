interface User {
  id: number;
  name: string;
  email: string;
}

export default function server(email: string, password: string) {
  const usuarios: {
    id: number;
    name: string;
    email: string;
    password: string;
  }[] = [{ id: 1, name: "paulo", email: "user@email", password: "123" }];

  // Verifica se há um usuário com o e-mail e a senha fornecidos
  const usuario = usuarios.find(
    (user) => user.email === email && user.password === password
  );

  console.log("user", usuario);

  // Retorna o usuário encontrado ou null se nenhum usuário for encontrado
  return usuario
    ? { user: { id: usuario.id, name: usuario.name, email: usuario.email } }
    : null;
}
