import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white font-sans">
      <header>
        <nav
          className="flex items-center justify-between px-8 py-3 border-b border-white/10"
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

      <section className="relative w-full min-h-[80vh] flex justify-center items-center gap-20 ">
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
            <h1 className="text-blueDefault text-5xl font-bold leading-tight mb-6">
              Simplifique sua gestão fiscal e de estoque{" "}
            </h1>
            <p className="text-blueDefault/80 text-lg mb-10 max-w-lg leading-relaxed">
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
                  className="flex items-center gap-3 text-blueDefault text-xl"
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
          <div className="bg-gray-800 border border-white/10 rounded-xl p-8 flex flex-col h-full gap-2 ">
            {/* Parte superior do formulário */}
            <h2 className="text-xl  text-white font-bold">
              Cadastre sua empresa e comece a utilizar
            </h2>
            <p className="text-white/40 text-[14px]  ">
              Sem cartão de crédito. Configure em minutos.
            </p>
            {/* Passos  */}
            <div className="flex items-center gap-2 mb-8 mt-5">
              <div className="flex items-center gap-2 text-sm  text-white">
                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-blueDefault bg-blueDefault text-white ">
                  1
                </span>
                Empresa
              </div>
              <div className="flex-1 h-px bg-white/10"></div>

              <div className="flex items-center gap-2 text-sm  text-white/40">
                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white/20 text-xs">
                  2
                </span>
                Responsável
              </div>
            </div>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nome da empresa"
                className="w-full h-12 px-4 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:to-blueDefault"
              />
              <input
                type="text"
                placeholder="CNPJ"
                className="w-full h-12 px-4 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:to-blueDefault"
              />
              <input
                type="text"
                placeholder="Email da empresa(opcional)"
                className="w-full h-12 px-4 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:to-blueDefault"
              />
              <div className="flex justify-between gap-2">
                <input
                  type="text"
                  placeholder="Telefone (opcional)"
                  className="w-20 h-12 px-4 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:to-blueDefault"
                />
                <input
                  type="text"
                  placeholder="Telefone (opcional)"
                  className="w-full h-12 px-4 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:to-blueDefault"
                />
              </div>

              <button className="w-full bg-blueDefault/70 text-white font-semibold py-3 rounded-lg hover:bg-blueDefault transition mt-2 cursor-pointer">
                Continuar
              </button>
            </form>

            <p className="text-center text-white/40 text-sm mt-6">
              Já tem conta?{" "}
              <a href="/auth/login" className="text-white ">
                Entrar
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="bg-red-500">
        Aqui vai ficar os valores dos planos
      </section>
      <footer className="bg-green-300">rodape</footer>
    </div>
  );
}
