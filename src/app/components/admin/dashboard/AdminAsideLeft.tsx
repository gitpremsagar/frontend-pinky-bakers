import Link from "next/link";

const DashboardAsideLeft = () => {
  return (
    <aside className="aside-left">
      <nav>
        <ul>
          <AsideNavLi href="/admin/dashboard" text="Dashboard" />
          <AsideNavLi href="/admin/products" text="Products" />
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
      <Link
        className="px-2 py-5 hover:bg-pink-400 text-white block"
        href={href}
      >
        {text}
      </Link>
    </li>
  );
};
