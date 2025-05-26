export default function adminLayout({ children }) {
  return (
    <header>
      <div>
        <h1>Admin</h1>
      </div>
      <p>Admin section</p>
      {children}
    </header>
  );
}
