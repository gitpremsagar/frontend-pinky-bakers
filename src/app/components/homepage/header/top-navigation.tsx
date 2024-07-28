import Link from "next/link";
const TopNavigation = () => {
  return (
    <ul className="flex bg-pink-700 justify-end">
      <NavLi text="Home" href="/" />
      <NavLi text="Cakes" href="/cakes" />
      <NavLi text="Decorations" href="/decorations" />
      <NavLi text="Chocolates" href="/chocolates" />
      <NavLi text="Dashbaord" href="/admin/dashboard" />
      <NavLi text="My Cart" href="/my-cart" />
    </ul>
  );
};

export default TopNavigation;

const NavLi = ({ text, href }: { text: string; href: string }) => {
  return (
    <li>
      <Link
        href={`${href}`}
        className="px-4 py-5 hover:bg-pink-600 text-white block"
      >
        {text}
      </Link>
    </li>
  );
};
