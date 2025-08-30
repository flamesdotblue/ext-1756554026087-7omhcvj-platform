import { Shield, CheckCircle, Lock, Fingerprint } from 'lucide-react';

function FeatureCard({ icon: Icon, title, desc, badge }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.25)]">
      <div className="mb-4 inline-flex items-center gap-2">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 text-cyan-300">
          <Icon className="h-5 w-5" />
        </div>
        {badge ? (
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wider text-neutral-300">
            {badge}
          </span>
        ) : null}
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-neutral-300">{desc}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Built for trust and conversion</h2>
        <p className="mt-3 text-neutral-300">Secure, standards-based authentication that fades into the background. No passwords to forget, reset, or steal.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <FeatureCard
          icon={Fingerprint}
          title="Biometric-first"
          desc="Delight users with Face ID, Touch ID, or platform passkeys. Works across devices with passkey sync."
          badge="WebAuthn"
        />
        <FeatureCard
          icon={Shield}
          title="Standards compliant"
          desc="Backed by FIDO2, WebAuthn, and modern crypto. Future-proof with a portable identity model."
          badge="FIDO2"
        />
        <FeatureCard
          icon={Lock}
          title="Phishing-resistant"
          desc="Public-key cryptography and origin-binding stop credential stuffing, MFA fatigue, and phishing."
        />
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-300">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <CheckCircle className="h-4 w-4 text-emerald-400" /> WebAuthn
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <CheckCircle className="h-4 w-4 text-emerald-400" /> FIDO2
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <CheckCircle className="h-4 w-4 text-emerald-400" /> Passkeys
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <CheckCircle className="h-4 w-4 text-emerald-400" /> Origin-bound
          </span>
        </div>
      </div>
    </section>
  );
}
