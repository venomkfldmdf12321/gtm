import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-349WXKM3WE"></script>
<script>
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-349WXKM3WE');
  `}
</script>

<script type="text/javascript">
{`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "m3k8m9cp1x");
`}
</script>

      </Head>
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
