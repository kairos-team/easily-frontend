import Image from "next/image";

export default function Home() {
  const plans = [
    {
      type: "Pro",
      moustPopular: false,
      price: "147",
      resoucers: ["Gestão de estoque", "Bruno", "Rafael", "Thalso"],
    },
    {
      type: "Business",
      moustPopular: true,
      price: "247",
      resoucers: ["Gestão de estoque", "Bruno", "Rafael", "Thalso"],
    },
    {
      type: "Enterprise",
      moustPopular: false,
      price: "347",
      resoucers: ["Gestão de estoque", "Bruno", "Rafael", "Thalso"],
    },
  ];
  return (
    <div className="bg-white font-sans">
      <header>
        <nav
          className="flex items-center justify-between px-8 py-3 border-y border-white/10"
          aria-label="Navegação Principal"
        >
          <div className="cursor-pointer flex items-center relative ">
            <Image
              src={"/logo1.png"}
              width={45}
              height={45}
              alt="logo"
              className="absolute bottom-1"
            />
            <span className="text-3xl  italic font-semibold text-blueDefault ml-10 ">
              Easily
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 py-5  text-blueDefault/75  tracking-wide text-xl">
            <button className="hover:text-blueDefault  text-2xl transition-colors cursor-pointer">
              Funcionalidades
            </button>
            <button className="hover:text-blueDefault   text-2xl transition-colors cursor-pointer">
              Planos
            </button>
            <button className="hover:text-blueDefault   text-2xl transition-colors cursor-pointer">
              Contato
            </button>
          </div>
          <a
            className="px-5 py-2 text-xl   border text-white  hover:bg-blueDefault bg-blueDefault/90 "
            href="/auth/login"
          >
            Entrar
          </a>
        </nav>
      </header>
      <section className="flex flex-col md:flex-row p-2 md:p-0 justify-center items-center gap-20 relative w-full min-h-[80vh] border-y border-white/10  ">
        <div className="absolute inset-0 z-0 pointer-events-none ">
          <Image
            src="/time2.jpg"
            alt="imagem de fundo"
            fill
            className="object-cover opacity-50  "
            priority
          />
        </div>
        <div className="flex flex-col md:flex-row gap-5 z-10  w-full  justify-center items-center">
          <div className=" max-w-150 ">
            <h1 className="text-black text-3xl md:text-5xl font-bold leading-tight mb-6">
              Simplifique sua gestão fiscal e de estoque{" "}
            </h1>
            <p className="text-black/80 text-lg mb-10 max-w-lg leading-relaxed">
              Centralize emissão de notas e controle de estoque em um sistema
              inteligente que reduz erros e economiza seu tempo.
            </p>
            <ul className="space-y-5">
              {[
                "Emissão de nota fiscal de compra e venda (NF-e)",
                "Emissão de nota fiscal de serviço (NFS-e)",
                "Controle de estoque em tempo real",
                "Entrada e saída de produtos (movimentações)",
                "Cadastro de produtos e serviços",
                "Cadastro de clientes e fornecedores",
                "Controle de almoxarifado",
                "Histórico completo de movimentações",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-black text-base md:text-xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-7 text-green-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white text-black border border-white/10 rounded-xl p-8 flex flex-col h-full gap-2 ">
            {/* Parte superior do formulário */}
            <h2 className="text-xl font-bold">
              Cadastre sua empresa e comece a utilizar
            </h2>
            <p className="text-black/40 text-[14px]  ">
              Sem cartão de crédito. Configure em minutos.
            </p>
            {/* Passos  */}
            <div className="flex items-center gap-2 mb-8 mt-5">
              <div className="flex items-center gap-2 text-sm  ">
                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-blueDefault bg-blueDefault text-white">
                  1
                </span>
                Empresa
              </div>
              <div className="flex-1 h-px bg-black/10" />

              <div className="flex items-center gap-2 text-sm  text-black/50">
                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-black/20 text-xs">
                  2
                </span>
                Responsável
              </div>
            </div>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nome da empresa"
                className="w-full h-12 px-4 rounded-lg bg-black/5 border border-black/10 focus:outline-none focus:ring-2 focus:to-blueDefault"
              />
              <input
                type="text"
                placeholder="CNPJ"
                className="w-full h-12 px-4 rounded-lg bg-black/5 border border-black/10 focus:outline-none focus:ring-2 focus:to-blueDefault"
              />
              <input
                type="text"
                placeholder="Email da empresa(opcional)"
                className="w-full h-12 px-4 rounded-lg bg-black/5 border border-black/10 focus:outline-none focus:ring-2 focus:to-blueDefault"
              />
              <div className="flex justify-between gap-2">
                <input
                  type="text"
                  placeholder="Telefone (opcional)"
                  className="w-20 h-12 px-4 rounded-lg bg-black/5 border border-black/10 focus:outline-none focus:ring-2 focus:to-blueDefault"
                />
                <input
                  type="text"
                  placeholder="Telefone (opcional)"
                  className="w-full h-12 px-4 rounded-lg bg-black/5 border border-black/10 focus:outline-none focus:ring-2 focus:to-blueDefault"
                />
              </div>

              <button className="w-full bg-blueDefault/70 text-white font-semibold py-3 rounded-lg hover:bg-blueDefault transition mt-2 cursor-pointer">
                Continuar
              </button>
            </form>

            <p className="text-center text-black/60 text-base mt-6">
              Já tem conta?{" "}
              <a href="/auth/login" className="text-amber-500">
                Entrar
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col p-10   text-black items-center border border-black/10">
        <h2 className="text-4xl font-bold mb-6 leading-snug text-black">
          Funcionalidades
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 ">
          <div className=" w-full md:w-1/4">
            <div className="border border-black/30 p-6 rounded-lg hover:border-amber-500/40 transition-colors">
              <div className="text-amber-500 mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                  <path d="M3 9h18M9 21V9"></path>
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Emissão de NF</h3>
              <p className="text-black/50 text-base leading-relaxed">
                Emissão de Notas fiscais de compra e venda.
              </p>
            </div>
          </div>
          <div className=" w-full md:w-1/4">
            <div className="border border-black/30 p-6 rounded-lg hover:border-amber-500/40 transition-colors">
              <div className="text-amber-500 mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                  <path d="M3 9h18M9 21V9"></path>
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Emissão de NF</h3>
              <p className="text-black/50 text-base leading-relaxed">
                Emissão de Notas fiscais de compra e venda.
              </p>
            </div>
          </div>{" "}
          <div className=" w-full md:w-1/4">
            <div className="border border-black/30 p-6 rounded-lg hover:border-amber-500/40 transition-colors">
              <div className="text-amber-500 mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                  <path d="M3 9h18M9 21V9"></path>
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Emissão de NF</h3>
              <p className="text-black/50 text-base leading-relaxed">
                Emissão de Notas fiscais de compra e venda.
              </p>
            </div>
          </div>{" "}
        </div>
      </section>
      <section className="flex flex-col md:flex-row border border-black/10">
        <div className=" w-full md:w-1/2 relative h-200 hidden md:block  ">
          <Image
            src="/dinheiro.jpg"
            alt="logo"
            fill
            className=" object-cover opacity-70"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center px-12 py-16 bg-white  ">
          <div className="w-8 h-px bg-amber-500 mb-6"></div>

          <h2 className="text-4xl font-bold mb-6 leading-snug text-black">
            Feito para quem valorizam o seu tempo
          </h2>

          <p className="text-black/60 text-xl leading-relaxed mb-10 ">
            Chega de planilhas, tudo que precisa em um so lugar...
          </p>

          {/* FLEX */}
          <div className="flex gap-6">
            <div className="w-1/4">
              <p className="text-xl md:text-3xl font-bold text-amber-500">
                100%
              </p>
              <p className="text-black/60 text-xm ">Dados seguros</p>
            </div>

            <div className="w-1/4">
              <p className="text-xl md:text-3xl font-bold text-amber-500">
                14 dias
              </p>
              <p className="text-black/60 text-xm">Teste grátis</p>
            </div>

            <div className="w-1/4">
              <p className="text-xl md:text-3xl font-bold text-amber-500">
                24/7
              </p>
              <p className="text-black/60 text-xm">Notificações</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-8 py-20 border border-black/10">
        <div className="max-w-6xl mx-auto flex flex-col gap-6  ">
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-5xl text-black">Planos</h2>

            <p className="text-xl text-black/60 max-w-2xl">
              Escolha o plano ideal para o seu escritório. Todos os planos
              incluem{" "}
              <span className="text-amber-500 font-semibold">
                14 dias grátis
              </span>{" "}
              sem cartão de crédito.
            </p>
          </div>
          <div className="flex flex-col md:flex-row  gap-5 mt-10 ">
            {plans.map((plan, index) => (
              <div
                className={`relative border ${plan.moustPopular ? "border-amber-500" : "border-black"} rounded-xl p-8 flex flex-col gap-6 hover:-translate-y-2 transition duration-300 text-black bg-white `}
                key={index}
              >
                {plan.moustPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full ">
                    MAIS POPULAR
                  </span>
                )}
                <p className="font-semibold text-xl text-amber-500">
                  {plan.type}
                </p>
                <div className="font-bold text-4xl">
                  R$ {plan.price}{" "}
                  <span className="text-xl font-normal">/mês</span>
                </div>
                <p className="text-xl">14 dias grátis para começar</p>
                <ul className="flex flex-col gap-3 text-[15px] ">
                  {plan.resoucers.map((resoucer, i) => (
                    <li className="flex items-center gap-2 text-base" key={i}>
                      <span className="text-green-400 " aria-hidden="true">
                        ✓
                      </span>
                      {resoucer}
                    </li>
                  ))}
                </ul>
                <button className=" bg-blueDefault/70 text-white font-semibold py-3 rounded-lg hover:bg-blueDefault transition mt-2 cursor-pointer">
                  Começar agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-250 px-8 py-20 border border-black/10">
        <div className=" max-w-6xl mx-auto flex flex-col gap-3 ">
          <h2 className="text-4xl text-black font-bold ">Fale Conosco</h2>
          <p className="font-semibold text-black/60">
            Dúvidas, sugestões ou suporte? Entre em contato.
          </p>
          <a
            href=""
            className="text-amber-500 flex flex-row gap-3 text-xl font-semibold"
          >
            <span className="text-amber-500">
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </span>
            kairos.devsolutions@gmail.com
          </a>
        </div>
      </section>
      <footer className="border border-black/10 px-8 md:px-16 py-8 flex items-center justify-between text-black/80 text-sm font-semibold">
        <span>© 2026 Easily. Todos os direitos reservados.</span>
        <div className="flex items-center gap-2">
          <div className="cursor-pointer flex items-center relative ">
            <Image
              src={"/logo1.png"}
              width={45}
              height={45}
              alt="logo"
              className="absolute bottom-1"
            />
            <span className="text-3xl  italic font-semibold text-blueDefault ml-10 ">
              Easily
            </span>
          </div>
        </div>
      </footer>{" "}
    </div>
  );
}
