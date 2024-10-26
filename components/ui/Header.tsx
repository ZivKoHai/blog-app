import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className="max-w-[1216px] flex justify-between items-center px-2 mx-auto">
      <Logo variant="primary" size={100} />
      <Navigation />
    </div>
  );
}
