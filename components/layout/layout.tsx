interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <main className="min-h-screen">{children}</main>
      <footer className="w-full text-center">&copy; 2022</footer>
    </div>
  );
};

export default Layout;
