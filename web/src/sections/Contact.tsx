import { useState } from "react";
import { FadeIn } from "../components/FadeIn";
import { MessageCircle, PartyPopper } from "lucide-react";

const WHATSAPP_NUMBER = "5521979464990";

export default function Contact() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    evento: "",
    quantidade: "",
    data: "",
    mensagem: "",
  });
  const [sent, setSent] = useState(false);

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Olá Mia Brigaderia! 🎉

Me chamo *${form.nome}* e gostaria de fazer um pedido para festa.

*Tipo de evento:* ${form.evento}
*Quantidade aprox.:* ${form.quantidade} unidades
*Data do evento:* ${form.data}

${form.mensagem}`,
  )}`;

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    window.open(waLink, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute -top-20 -right-20 h-80 w-80 bg-mint/20 rounded-blob animate-blob blur-3xl -z-10" />

      <div className="section-container max-w-2xl">
        <FadeIn>
          <div className="flex items-center justify-center gap-2 mb-2">
            <PartyPopper size={18} className="text-rose-dark" />
            <p className="text-sm font-medium uppercase tracking-widest text-rose-dark">
              Pedidos para festas &amp; eventos
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-chocolate text-center mt-2 mb-4">
            Faça sua encomenda
          </h2>
          <p className="text-center text-cocoa-400 mb-2">
            Trabalhamos com pedidos a partir de{" "}
            <strong className="text-chocolate">50 unidades</strong> — perfeito
            para casamentos, aniversários, chás de bebê e eventos corporativos.
          </p>
          <p className="text-center text-cocoa-400 mb-10 text-sm">
            Preencha o formulário e entraremos em contato pelo WhatsApp para
            montar o seu cardápio personalizado. 🍫
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-3xl bg-cream p-8 border border-cocoa-100"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="c-nome" className="block text-sm font-medium text-cocoa-600 mb-1">
                  Seu nome *
                </label>
                <input
                  id="c-nome"
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
                  className="w-full h-11 rounded-xl border border-cocoa-200 bg-white px-4 text-sm focus:outline-none focus:ring-2 focus:ring-mint"
                  placeholder="Maria Silva"
                />
              </div>
              <div>
                <label htmlFor="c-email" className="block text-sm font-medium text-cocoa-600 mb-1">
                  E-mail *
                </label>
                <input
                  id="c-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full h-11 rounded-xl border border-cocoa-200 bg-white px-4 text-sm focus:outline-none focus:ring-2 focus:ring-mint"
                  placeholder="email@exemplo.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="c-evento" className="block text-sm font-medium text-cocoa-600 mb-1">
                  Tipo de evento *
                </label>
                <select
                  id="c-evento"
                  required
                  value={form.evento}
                  onChange={(e) => setForm((f) => ({ ...f, evento: e.target.value }))}
                  className="w-full h-11 rounded-xl border border-cocoa-200 bg-white px-4 text-sm focus:outline-none focus:ring-2 focus:ring-mint"
                >
                  <option value="">Selecione...</option>
                  <option>Aniversário</option>
                  <option>Casamento</option>
                  <option>Chá de bebê / revelação</option>
                  <option>Evento corporativo</option>
                  <option>Formatura</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label htmlFor="c-qtd" className="block text-sm font-medium text-cocoa-600 mb-1">
                  Qtd. aproximada *
                </label>
                <input
                  id="c-qtd"
                  type="number"
                  min={50}
                  required
                  value={form.quantidade}
                  onChange={(e) => setForm((f) => ({ ...f, quantidade: e.target.value }))}
                  className="w-full h-11 rounded-xl border border-cocoa-200 bg-white px-4 text-sm focus:outline-none focus:ring-2 focus:ring-mint"
                  placeholder="Mín. 50 unidades"
                />
              </div>
            </div>

            <div>
              <label htmlFor="c-data" className="block text-sm font-medium text-cocoa-600 mb-1">
                Data do evento *
              </label>
              <input
                id="c-data"
                type="date"
                required
                value={form.data}
                onChange={(e) => setForm((f) => ({ ...f, data: e.target.value }))}
                className="w-full h-11 rounded-xl border border-cocoa-200 bg-white px-4 text-sm focus:outline-none focus:ring-2 focus:ring-mint"
              />
            </div>

            <div>
              <label htmlFor="c-msg" className="block text-sm font-medium text-cocoa-600 mb-1">
                Detalhes adicionais
              </label>
              <textarea
                id="c-msg"
                rows={3}
                value={form.mensagem}
                onChange={(e) => setForm((f) => ({ ...f, mensagem: e.target.value }))}
                className="w-full rounded-xl border border-cocoa-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-mint resize-none"
                placeholder="Sabores desejados, tema da festa, restrições alimentares..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors text-base"
            >
              <MessageCircle size={18} />
              {sent ? "Redirecionando para o WhatsApp..." : "Solicitar orçamento pelo WhatsApp"}
            </button>

            <p className="text-center text-xs text-cocoa-400">
              Ao enviar, você será redirecionado ao WhatsApp com as informações preenchidas.
            </p>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
