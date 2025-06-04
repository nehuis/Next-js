import { LoginForm } from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-8 shadow-md rounded-lg text-center">
      <h1 className="text-2xl font-bold mb-10">Login to Admin Panel</h1>
      <LoginForm />
    </div>
  );
}
