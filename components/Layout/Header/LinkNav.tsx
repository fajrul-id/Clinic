import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LinkNav = ({
    children,path
  }: {
    children: React.ReactNode,
    path: string
  }) => {

  const pathname = usePathname();
  return (
    <>
      <Link
        href={path}
        className={
          pathname === path
            ? "is-active nav_item capitalize text-primary hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            : "nav_item capitalize text-primary hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
        }
      >
        {children}
      </Link>
    </>
  );
};

export default LinkNav;
