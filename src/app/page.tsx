import GameSaleSection from "@/components/gameSaleSection/GameSaleSection";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <SubHeader />
      <GameSaleSection />
      <h1 style={{ backgroundColor: "white", height: "500px" }}>
        Recreate Nintendo project starts here
      </h1>
    </main>
  );
}
