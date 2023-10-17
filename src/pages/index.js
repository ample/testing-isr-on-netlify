import { useEffect } from "react";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ title, ts }) {
  useEffect(() => {
    setTimeout(async () => {
      const res = await axios.get(`/api/api`);
      console.log(JSON.stringify(res, null, 2));
    }, 15000);
  }, []);

  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        {title} - {ts}
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await axios.get(`/api/api`);
  const { title } = res;
  return {
    revalidate: 10,
    props: {
      title,
      ts: Date.now(),
    },
  };
};
