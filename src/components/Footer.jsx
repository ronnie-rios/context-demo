const Footer = () => {
  return (
    <footer className=" rounded-lg shadow m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li>Made By Ronnie Rios</li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center">
          <a
            href="https://github.com/ronnie-rios"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Check out my GitHub Here
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
