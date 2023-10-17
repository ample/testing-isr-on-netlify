import { useEffect } from "react";
import styles from "@/styles/Home.module.css";
import axios from "axios";

// const getAPI = () => `https://main--lively-puppy-196937.netlify.app/api/test`;

export default function Home({ title, ts }) {
  useEffect(() => {
    setTimeout(async () => {
      const res = await axios.get(getAPI());
      console.log(JSON.stringify(res, null, 2));
    }, 15000);
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
    `https://cdn.contentful.com/spaces/lkrmxse64d8p/environments/master/entries/QqTCYM8ByheGp68DLkOCM?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
  );
  const { title } = res;
  return {
    revalidate: 10,
    props: {
      title: title || "No title",
      ts: Date.now(),
    },
  };
};
