import { useEffect } from "react";
import styles from "@/styles/Home.module.css";
import axios from "axios";

export default function Home({ title, ts }) {
  useEffect(() => {
    if (typeof window !== undefined) {
      setTimeout(async () => {
        const {
          data: { title },
        } = await axios.get(`/api/test`);
        console.log(JSON.stringify(title, null, 2));
      }, 15000);
    }
  }, []);

  return (
    <>
      <main className={`${styles.main}`}>
        {title} - {ts}
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await axios.get(
    `https://main--lively-puppy-196937.netlify.app/api/test`
  );
  const {
    data: { title },
  } = res;
  return {
    revalidate: 60,
    props: {
      title: title || "No title",
      ts: Date.now(),
    },
  };
};
