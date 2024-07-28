import Link from "next/link";

const DashboardAsideLeft = () => {
  const dummyCategories = [
    { id: 1, name: "Cakes" },
    { id: 2, name: "Chololates" },
    { id: 3, name: "Decorations" },
  ];
  return (
    <aside className="aside-left">
      <nav>
        <ul>
          <AsideNavLi href="/admin/dashboard" text="Dashboard" />
          <li>
            <NavItem>Products</NavItem>
            <ul>
              {dummyCategories.map((category) => (
                <NestedNavLi
                  key={category.id}
                  href={`/admin/products/${category.id}`}
                  text={category.name}
                />
              ))}
            </ul>
          </li>

          <AsideNavLi href="/admin/orders" text="Orders" />
          <AsideNavLi href="/admin/customers" text="Customers" />
          <AsideNavLi href="/admin/reviews" text="Reviews" />
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardAsideLeft;

const AsideNavLi = ({
  href,
  text,
}: Readonly<{ href: string; text: string }>) => {
  return (
    <li>
      <Link href={href}>
        <NavItem>{text}</NavItem>
      </Link>
    </li>
  );
};

const NavItem = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <span className="px-2 py-5 hover:bg-pink-400 text-white block">
      {children}
    </span>
  );
};

const NestedNavLi = ({
  href,
  text,
}: Readonly<{ href: string; text: string }>) => {
  return (
    <li>
      <Link href={href}>
        <NestedNavItem>{text}</NestedNavItem>
      </Link>
    </li>
  );
};

const NestedNavItem = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <span className="px-2 py-5 hover:bg-pink-400 text-white block ml-5">
      {children}
    </span>
  );
};
