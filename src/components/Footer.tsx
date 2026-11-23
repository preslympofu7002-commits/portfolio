import { navItems } from "../data/navigation";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <a className="footer-name" href="#home">
            Presly Mpofu<span>·</span>
          </a>
          <nav aria-label="Footer navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="text-link" href="#home">
            Back to top
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Presly Mpofu</span>
          <span>Rooted in curiosity. Built with intention.</span>
          <span>Zimbabwe / India</span>
        </div>
      </div>
    </footer>
  );
}
