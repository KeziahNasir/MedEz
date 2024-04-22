import Doctors from "../components/Doctors";
import Hero from "../components/Hero";
import Review from "../components/Review";

function Home() {
  return (
    <div>
      <Hero />
      <Doctors/>
      <Review/>
    </div>
  );
}

export default Home;