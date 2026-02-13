export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6">
      <h1 className="text-xl font-semibold tracking-wide">LILAC</h1>
      <ul className="flex gap-8 text-sm uppercase tracking-widest">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
