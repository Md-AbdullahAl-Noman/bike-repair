export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-logo">Ironline Cycles</p>
          <p className="footer-tag">Bike repair &amp; tune-ups · USA</p>
        </div>
        <div>
          <p className="footer-title">Quick links</p>
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#packages">Tune-ups</a>
            </li>
            <li>
              <a href="#location">Hours &amp; location</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-title">For shop owners</p>
          <p className="footer-small">
            Swap placeholder phone, email, and address. Add SSL, privacy policy,
            and ADA-friendly contrast checks before launch.
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © {year} Ironline Cycles. Demo site for bike repair businesses.
        </p>
      </div>
    </footer>
  );
}
