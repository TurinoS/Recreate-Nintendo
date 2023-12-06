import Image from "next/image";
import logo from "../../public/nintendo-logo.jpg";

export default function Header() {
  return (
    <header>
      <a href="/">
        <Image src={logo} alt="Nintendo logo" width={120} height={65} />
      </a>
    </header>
  );
}
