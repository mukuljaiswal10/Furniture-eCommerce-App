
import Footer from "./Components/Common/Footer";
import Header from "./Components/Common/Header";
import ScrollToTop from "./Components/Common/ScrollToTop";
import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight : ["300", "400", "500" ,"600","700","800","900"],
  display:"swap",
})


export const metadata = {
  title: "Online Furniture In India",
  description: "Furniture Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={rubik.className}
      >
        <Header/>
        {children}
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
