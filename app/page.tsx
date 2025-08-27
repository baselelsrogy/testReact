// import Image from "next/image";
// import styles from "./page.module.css";
import Description from "@/components/Descrition";
import Header from "@/components/Header";




function Home() {

  const hideDescription = true;

  
  return (
      <main>
        <Header textSub="Hello From Text Sub" text="Header Component"/>
        {hideDescription && <Description />}
      </main>

  );
}


export default Home;