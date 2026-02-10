const Footer = () => (
  <footer className="border-t border-border/50 py-8 text-center">
    <p className="text-sm text-muted-foreground">
      © {new Date().getFullYear()}{" "}
      <span className="gradient-text font-display font-semibold">
        S M Ghulam Ghaus Faiyaz
      </span>
      . Built with React & passion.
    </p>
  </footer>
);

export default Footer;
