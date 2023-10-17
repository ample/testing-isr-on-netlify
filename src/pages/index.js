import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ title, ts }) {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        {title} - {ts}
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await axios.get(
    `https://cdn.contentful.com/spaces/lkrmxse64d8p/environments/master/entries/QqTCYM8ByheGp68DLkOCM?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
  );
  const { data: { fields: { title } = {} } = {} } = res;
  return {
    revalidate: 10,
    props: {
      title,
      ts: Date.now(),
    },
  };
};
