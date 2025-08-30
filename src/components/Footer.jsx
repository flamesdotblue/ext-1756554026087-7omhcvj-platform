export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-neutral-400 md:flex-row">
        <p>© {new Date().getFullYear()} Vanish Labs. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a className="hover:text-white" href="#code">Docs</a>
          <a className="hover:text-white" href="#features">Security</a>
          <a className="hover:text-white" href="#waitlist">Contact</a>
        </div>
      </div>
    </footer>
  );
}
