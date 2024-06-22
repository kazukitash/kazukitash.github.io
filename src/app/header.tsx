import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex relative h-10 my-1 md:my-2 justify-center items-center">
      <Link href="/" className="block w-max h-full hover:cursor-pointer">
        <Image src="/logo.png" alt="Yukima Logo" width={108} height={42} />
      </Link>
    </header>
  );
};

export default Header;
