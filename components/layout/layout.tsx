import Navbar from "./navbar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen pt-20">{children}</main>
      <footer className="w-full text-center">&copy; 2022</footer>
    </div>
  );
};

export default Layout;
