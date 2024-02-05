import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-2 mt-auto font-text">
      <p className="text-lg">
        Developed by <span className="font-bold">Raveen R V</span>
      </p>
      <div className="flex justify-center gap-2 text-6xl">
        <a href="https://github.com/raveenrv904">
          <Icon icon="mdi:github" />
        </a>
        <a href="https://www.linkedin.com/in/raveenrv-in/">
          <Icon icon="mdi:linkedin" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
