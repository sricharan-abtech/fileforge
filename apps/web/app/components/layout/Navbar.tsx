import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="border-b border-white/10">
      <Container className="flex h-16 items-center justify-between">
        <h1 className="text-2xl font-bold text-white">
          FileForge
        </h1>

        <nav className="hidden gap-8 text-sm md:flex">
          <a href="#">Tools</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
        </nav>

        <Button>Login</Button>
      </Container>
    </header>
  );
}