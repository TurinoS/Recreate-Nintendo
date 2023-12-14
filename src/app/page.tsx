import GameSaleSection from "@/components/gameSaleSection/GameSaleSection";
import SubHeader from "../components/header/SubHeader";
import Header from "@/components/header/Header";
import GameDescription from "@/components/gameDescription/GameDescription";

export default function Home() {
  return (
    <main>
      <Header />
      <SubHeader />
      <GameSaleSection />
      <GameDescription />
    </main>
  );
}
