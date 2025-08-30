import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Mail } from 'lucide-react';

export default function Hero() {
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    // Basic UX only – replace with real submit endpoint later
    alert(`Thanks! We'll be in touch at: ${email || 'your email'}`);
    setEmail('');
  };

  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-500/20 via-purple-500/10 to-transparent blur-3xl" />
      </div>
      <nav className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/20">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold tracking-tight text-white">Vanish</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <a href="#code" className="hover:text-white transition-colors">Docs</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#waitlist" className="hover:text-white transition-colors">Waitlist</a>
        </div>
      </nav>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-20 pt-6 md:grid-cols-2 md:gap-14 md:pb-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300 backdrop-blur">
            Passwordless • Passkeys • WebAuthn
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Auth that disappears.
          </h1>
          <p className="mt-4 max-w-xl text-neutral-300">
            Drop-in biometric login for developers in one line of code. Reduce friction, boost conversions, and build trust with standards-based passkeys.
          </p>

          <form id="waitlist" onSubmit={onSubmit} className="mt-8 flex w-full max-w-md items-center gap-3">
            <div className="relative w-full">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-9 py-3 text-sm text-white placeholder:text-neutral-400 outline-none ring-0 transition focus:border-cyan-400/50"
              />
            </div>
            <button
              type="submit"
              className="whitespace-nowrap rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
            >
              Join waitlist
            </button>
          </form>

          <p className="mt-3 text-xs text-neutral-400">
            No passwords, ever. Backed by WebAuthn and FIDO2.
          </p>
        </div>

        <div className="relative h-[420px] w-full md:h-[520px]">
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0" />
          <Spline
            style={{ width: '100%', height: '100%' }}
            scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
        </div>
      </div>
    </header>
  );
}
