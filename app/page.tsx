// import Image from "next/image";
import styles from "./page.module.css";
import Description from "@/components/Descrition";
import Header from "@/components/Header";




function Home() {

  
  return (
      <main >
        <div className={styles.section}>
          <Header textSub="Hello From Text Sub" text="Header Component"/>
          <Description />

        </div>
      </main>

  );
}


export default Home;