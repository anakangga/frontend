import Navbar from "./navbar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen pt-16">{children}</main>
      <footer className="w-full text-center bg-[#319795] py-16 text-white">
        &copy; 2022 Gesturin
      </footer>
    </div>
  );
};

export default Layout;
