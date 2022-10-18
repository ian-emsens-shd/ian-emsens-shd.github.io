import { Badge } from "@meemoo/react-components/";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Badge text="Badge" />
      </main>
    </div>
  );
};

export default Home;
