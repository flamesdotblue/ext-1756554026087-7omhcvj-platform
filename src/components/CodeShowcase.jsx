import { useState } from 'react';
import { Copy, Check, Code2 } from 'lucide-react';

const snippets = {
  javascript: `// install\nnpm i @vanishlabs/auth\n\n// init\nimport { Vanish } from '@vanishlabs/auth'\n\nconst vanish = new Vanish({ projectId: process.env.VANISH_PROJECT_ID })\n\n// one-line, passwordless login\nawait vanish.login({ method: 'passkey' })\n\n// get the user \nconst user = await vanish.getUser()`,
  react: `// install\nyarn add @vanishlabs/auth\n\n// App.jsx\nimport { VanishProvider, useVanish } from '@vanishlabs/auth/react'\n\nfunction LoginButton() {\n  const { login } = useVanish()\n  return (\n    <button onClick={() => login({ method: 'passkey' })}>\n      Sign in\n    </button>\n  )\n}\n\nexport default function App() {\n  return (\n    <VanishProvider projectId={import.meta.env.VITE_VANISH_PROJECT_ID}>\n      <LoginButton />\n    </VanishProvider>\n  )\n}`,
  python: `# install\npip install vanish-auth\n\n# server.py\nfrom vanish import verify_assertion\n\n# verify WebAuthn response on your server\nresult = verify_assertion(request.json, project_id=ENV['VANISH_PROJECT_ID'])\nprint(result.user_id)`
};

export default function CodeShowcase() {
  const tabs = [
    { id: 'javascript', label: 'JavaScript' },
    { id: 'react', label: 'React' },
    { id: 'python', label: 'Python' }
  ];
  const [active, setActive] = useState('javascript');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippets[active]);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <section id="code" className="relative mx-auto max-w-7xl px-6 py-12 md:py-20">
      <div className="mb-6 flex items-center gap-2 text-neutral-300">
        <Code2 className="h-5 w-5" />
        <span className="text-sm">One-line integration</span>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[260px,1fr]">
        <div className="rounded-lg border border-white/10 bg-white/5 p-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`mb-2 w-full rounded-md px-3 py-2 text-left text-sm transition last:mb-0 ${
                active === t.id
                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-white'
                  : 'text-neutral-300 hover:bg-white/5'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="relative">
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-600/20 blur-lg" />
          <div className="relative rounded-xl border border-white/10 bg-[#0a0a0a] p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs text-neutral-400">{active}.snippet</span>
              <button onClick={handleCopy} className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-200 transition hover:bg-white/10">
                {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <pre className="max-h-[460px] overflow-auto rounded-lg bg-black/60 p-4 text-[12.5px] leading-relaxed text-neutral-200">
              <code>{snippets[active]}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
