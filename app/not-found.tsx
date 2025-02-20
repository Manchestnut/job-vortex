import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

export default function PageNotFound() {
  return (
    <>
    <NavBar />
      <div className="text-center my-40">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="text-lg mt-2">
          Oops! The page you're looking for doesn't exist.
        </p>
      </div>
      <Footer />
    </>
  );
}
