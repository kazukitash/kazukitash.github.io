import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-10 flex justify-center items-center gap-8 text-sm">
      <div className="w-fit">©︎ Yukima</div>
      <Link href="/privacy-policy" className="w-fit hover:text-accent">
        プライバシーポリシー
      </Link>
    </div>
  );
};

export default Footer;
