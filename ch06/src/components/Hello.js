export default function Hello({ user }) {
  return user?.name ? <h1>Hello! {user.name}</h1> : <button>Login</button>;
}
