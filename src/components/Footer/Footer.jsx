import '../Components.sass'
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>
        Copyright &copy; {currentYear} <b>Geek-s.</b> All rights reserved.
      </p>
      <p>
        <span>Made by </span>
        <a href="https://github.com/airgirl2305" target="_blank">
          @airgirl2305
        </a>
      </p>
    </footer>
  );
};
