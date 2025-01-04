import Header from "./components/header/header";
import Favorite from "./components/favorite/favorite";
import Favoritepro from "./components/favoritepro/favoritepro";
import AllRespi from "./components/allRespi/allRespi";
import Policy from "./components/policy/policy";
import Branch from "./components/policy/branch/branch";
import Comments from "./components/comments/comments";
import Footer from "./components/footer/footer";
export default function Home() {
  return (
    <>
      <Header />
      <Favorite/>
      <Favoritepro/>
      <AllRespi/>
      <Policy/>
      <Branch/>
      <Comments/>
      <Footer/>
    </>
  );
}
