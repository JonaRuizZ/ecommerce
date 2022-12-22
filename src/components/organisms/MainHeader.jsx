import Logo from "../molecules/Logo";

const MainHeader = ({ children }) => {
  return (
    <div className="fixed w-full z-10 bg-gradient-to-r from-cyan-300 to-blue-500 shadow-lg">
      <div className="lg:max-w-200 w-full mx-auto flex items-center justify-between m-4">
        <Logo />
        { children }
      </div>
    </div>
  )
};

export default MainHeader;
