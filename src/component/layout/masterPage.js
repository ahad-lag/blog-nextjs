import Head from 'next/head'
import Footer from './footer';
import Header from './header';

const MasterPage = ({ children }) => {
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
      <div className="min-h-full flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-7xl">

          <Header />

          {children}

          <Footer />
        </div>
      </div>
    </>
  )
}

export default MasterPage;