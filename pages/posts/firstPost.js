import Head from "next/head";
import Link from "next/link";


export default function firstPost() {
  return (
    <div>
      <Head>
        <title>My first post</title>
      </Head>
      <h1>最初の投稿</h1>
      <Link href="/">My first blog post</Link>
    </div>
  );
}