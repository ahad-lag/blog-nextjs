import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>وبلاگ</title>
        <meta name="description" content="بروزترین مقالات در حوزه برنامه نویسی"/>
        <meta name="keywords" content="آموزش طراحی سایت,آموزش برنامه نویسی,طراحی وب,ساخت وب سایت,آموزش git,آموزش لاراول,آموزش php,آموزش react,آموزش پی اچ پی,آموزش laravel,آموزش جاوا اسکریپت,آموزش ساخت وب سایت,آموزش بوت استرپ,آموزش mvc,آموزش React Native"/>
        <meta property="og:title" content="وبلاک مقالات"/>
        <meta property="og:description" content="بروزترین مقالات در حوزه برنامه نویسی"/>
        <meta property="og:url" content="http://localhost:3000/"/>
      </Head>
      <div className="text-3xl font-bold underline">احد لگ</div>
    </>
  )
}
