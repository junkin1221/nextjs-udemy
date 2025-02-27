import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout, { siteTitle } from "@/components/Layout";
import utilStyles from "../styles/utils.module.css";
import {getPostsData} from "../lib/post";

//ssgの場合、１回だけデータを持ってくる
export async function getStaticProps() {
  const allPostsData = getPostsData();
  return{
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
    <Head><title>
        {siteTitle}
      </title></Head>
    <section className="{utilStyles.headingMd}">
      <p>
        わたらぼのギャラリーサイトです
      </p>
    </section>

    <section class={utilStyles.headingMd}>
    <h2>ギャラリー</h2>
      <div className={styles.grid}>
        {allPostsData.map(({ id, date, title ,thumbnail}) => (
        <article key={id}>
        <Link href={`/posts/${id}`}>
          <img src={`${thumbnail}`} className={styles.thumbnailImage} />
        </Link>
        <Link href={`/posts/${id}`}>
          <p className={utilStyles.boldText}>{title}</p>
        </Link>
        <br/>
        <small class={utilStyles.lightText}>{date}</small>
      </article>
        ))}
      </div>
    </section>
    </Layout>
  );
}
