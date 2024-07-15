import ContactSection from "@/components/Contacts";
import HighlightedArticles from "@/components/HighlightedArticles";
import HighlightedProjects from "@/components/HighlightedProjects";
import IntroSection from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Niken Hapsari | Actuarial Science Grad Turned Software Engineer –
          Business Savvy and Client-Focused
        </title>
        <meta
          name="description"
          content="Dive into Niken Hapsari's journey from actuarial science to software engineering. Explore her portfolio showcasing projects, web and mobile app development skills, and unique business insights."
        />
        <meta
          name="keywords"
          content=" Software Engineer, Web Developer, AI/ML Engineer, Backend Developer, Mobile App Developer, Actuarial Science, Programming, Portfolio, Business Acumen, Client Satisfaction"
        />
        <meta
          property="og:title"
          content="Niken Hapsari | Actuarial Science Grad Turned Software Engineer – Business Savvy and Client-Focused"
        />
        <meta
          property="og:description"
          content="Discover Niken Hapsari's journey from actuarial science to software engineering. Explore her projects, skills, and professional experience."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nikenhapsari.my.id/" />
        <meta
          property="og:image"
          content="https://www.nikenhapsari.my.id/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@NikenHapsari" />
        <meta
          name="twitter:title"
          content="Niken Hapsari | Actuarial Science Grad Turned Software Engineer – Business Savvy and Client-Focused"
        />
        <meta
          name="twitter:description"
          content="Explore Niken Hapsari's journey from actuarial science to software engineering. See her projects, skills, and experience in technology."
        />
        <meta
          name="twitter:image"
          content="https://www.nikenhapsari.my.id/twitter-image.jpg"
        />
        {/* <!-- LinkedIn Meta Tags --> */}
        <meta
          property="linkedin:title"
          content="Niken Hapsari | Actuarial Science Grad Turned Software Engineer – Business Savvy and Client-Focused"
        />
        <meta
          property="linkedin:description"
          content="Discover Niken Hapsari's journey from actuarial science to software engineering. Explore her projects, skills, and professional experience."
        />
        <meta
          property="linkedin:url"
          content="https://www.linkedin.com/in/nikenhapsari/"
        />
        <meta
          property="linkedin:image"
          content="https://www.nikenhapsari.com/linkedin-image.jpg"
        />

        {/* <!-- GitHub Meta Tags --> */}
        <meta
          property="github:title"
          content="Niken Hapsari | Software Engineer"
        />
        <meta
          property="github:description"
          content="Explore Niken Hapsari's GitHub portfolio featuring her projects and contributions in software development."
        />
        <meta property="github:url" content="https://github.com/nikenhpsr" />
        <meta
          property="github:image"
          content="https://www.nikenhapsari.com/github-image.jpg"
        />

        {/* <!-- Mail Meta Tags --> */}
        <meta name="email" content="hpsri.niken@gmail.com" />
        <meta name="email:subject" content="Contact Niken Hapsari" />
        <meta
          name="email:body"
          content="Hi Niken, I visited your portfolio and would like to discuss..."
        />

        <link rel="canonical" href="https://www.nikenhapsari.my.id/" />
      </Head>
      <main className="my-4">
        {/* <Navbar /> */}
        <IntroSection />
        <ContactSection />
        <HighlightedProjects />
        <HighlightedArticles />
      </main>
    </>
  );
}
