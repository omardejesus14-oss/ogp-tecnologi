"use client";

import { useState } from "react";
import Header from "./header"; // Asegúrate de mantener la ruta correcta de tu Header
import FormularioPedido from "./FormularioPedido";
import { BiSun, BiBattery } from "react-icons/bi";
import {
  FiShoppingCart,
  FiAlertCircle,
  FiCheckCircle,
  FiTruck,
  FiShield,
  FiLock,
  FiArrowRight,
  FiPlay,
  FiStar,
  FiHeadphones,
  FiPackage,
  FiZap,
  FiSun,
  FiSliders,
  FiRepeat,
  FiHome,
  FiChevronDown,
  FiChevronUp,
  FiClock,
} from "react-icons/fi";

const beneficiosHero = [
  "Funciona incluso durante apagones.",
  "Energía solar gratuita.",
  "Batería recargable incluida.",
  "Envío GRATIS.",
  "Pago Contra Entrega.",
  "Envíos a toda Colombia.",
];

const problemas = [
  {
    title: "No puedes dormir por el calor",
    text: "Las noches se vuelven incómodas y el descanso se pierde.",
    icon: FiAlertCircle,
  },
  {
    title: "Tus hijos tampoco descansan",
    text: "El calor afecta la tranquilidad del hogar por la noche.",
    icon: FiHome,
  },
  {
    title: "Gastas más electricidad",
    text: "El aire acondicionado y otros ventiladores elevan tu consumo.",
    icon: FiZap,
  },
  {
    title: "Los apagones dañan tu comodidad",
    text: "La falta de energía te deja sin alivio cuando más lo necesitas.",
    icon: FiClock,
  },
];

const beneficiosProducto = [
  {
    title: "Funciona con energía solar",
    text: "Disfruta de aire fresco sin depender de la energía convencional.",
    icon: FiSun,
  },
  {
    title: "Batería nocturna",
    text: "Mantiene el rendimiento incluso cuando se pone el sol.",
    icon: BiBattery,
  },
  {
    title: "Panel solar incluido",
    text: "Todo lo necesitas para empezar a usarlo de inmediato.",
    icon: FiSun,
  },
  {
    title: "Bajo consumo",
    text: "Optimiza tu consumo y reduce el gasto eléctrico diario.",
    icon: FiZap,
  },
  {
    title: "Varias velocidades",
    text: "Ajusta la intensidad según tu comodidad y el clima.",
    icon: FiSliders,
  },
  {
    title: "Fácil de transportar",
    text: "Ideal para moverlo entre habitaciones, sala o terraza.",
    icon: FiPackage,
  },
  {
    title: "Ideal para habitaciones y salas",
    text: "Brinda confort en el hogar sin ocupar mucho espacio.",
    icon: FiHome,
  },
  {
    title: "Funciona durante apagones",
    text: "Sigue brindando ventilación cuando la luz se va.",
    icon: FiRepeat,
  },
];

const faqs = [
  {
    question: "¿Cuánto dura la batería?",
    answer:
      "La batería ofrece varias horas de funcionamiento, dependiendo del modo y la intensidad seleccionada.",
  },
  {
    question: "¿El panel solar viene incluido?",
    answer:
      "Sí, el panel solar viene incluido en el paquete para que puedas cargarlo de forma directa.",
  },
  {
    question: "¿Puedo pagar cuando llegue?",
    answer:
      "Sí, ofrecemos pago contra entrega para mayor seguridad y comodidad.",
  },
  {
    question: "¿Hacen envíos a toda Colombia?",
    answer:
      "Sí, hacemos envíos nacionales a toda Colombia con entrega segura y rápida.",
  },
  {
    question: "¿Cuántas velocidades tiene?",
    answer:
      "Cuenta con varias velocidades para adaptar el flujo de aire a tus necesidades.",
  },
  {
    question: "¿Cuánto tiempo tarda el envío?",
    answer:
      "Los tiempos varían según la zona, pero normalmente el envío se realiza en pocos días hábiles.",
  },
];

export default function VentiladorLanding() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen font-sans">
      <Header />

      {/* ==================== HERO SECTION ==================== */}
      <header className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-orange-50 py-12 md:py-20 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.12),_transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.12),_transparent_35%)]" />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-[0.2em]">
              <BiSun className="text-sm" />
              Innovación Solar
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-5 text-slate-900 leading-tight">
              NUNCA MÁS PASE CALOR CUANDO SE VAYA LA LUZ
            </h1>

            <p className="text-lg md:text-xl text-slate-700 mt-4 max-w-2xl">
              Ventilador Solar Recargable con Batería Nocturna y Panel Solar
              Incluido.
            </p>

            <ul className="mt-6 grid sm:grid-cols-2 gap-3 w-full max-w-xl">
              {beneficiosHero.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-2xl border border-emerald-100 bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm"
                >
                  <FiCheckCircle className="mt-0.5 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 w-full max-w-lg">
              <a
                href="#ordenar"
                className="inline-flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                <FiShoppingCart />
                QUIERO EL MÍO CON ENVÍO GRATIS
                <FiArrowRight />
              </a>
              <p className="mt-3 text-sm text-slate-600">
                Pago Contra Entrega • Envío GRATIS • Envíos a toda Colombia
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-400/20 via-transparent to-orange-400/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl">
              <img
                src="/images/ventiladorgrande1.jpeg"
                alt="Ventilador solar recargable premium"
                className="w-full h-auto object-contain rounded-[1.5rem] max-h-[560px]"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/50 bg-slate-900/80 p-4 text-white backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">
                      Potencia solar
                    </p>
                    <p className="text-lg font-semibold">
                      Aire fresco todo el día
                    </p>
                  </div>
                  <div className="rounded-full bg-emerald-500/20 p-3">
                    <BiSun className="text-2xl text-emerald-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ==================== TRUST BAR ==================== */}
      <section className="bg-white border-y border-slate-200 px-4 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
          {[
            { label: "Envío Gratis", icon: FiTruck },
            { label: "Pago Contra Entrega", icon: FiLock },
            { label: "Garantía del Producto", icon: FiShield },
            { label: "Envíos Nacionales", icon: FiPackage },
            { label: "Compra Segura", icon: FiShield },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-medium text-slate-700 ${
                  index === 4 ? "md:col-span-1" : ""
                }`}
              >
                <Icon className="text-emerald-600" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================== PRODUCT VIDEO ==================== */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
              Demo del producto
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
              MIRA CÓMO FUNCIONA
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-4 md:p-8 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.2),_transparent_45%)]" />

            <div className="relative mx-auto max-w-5xl">
              <p className="mb-4 text-center text-sm md:text-base font-semibold text-emerald-300 uppercase tracking-[0.25em]">
                Mira cómo funciona nuestro Ventilador Solar en la vida real.
              </p>

              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950 shadow-2xl">
                <video
                  src="/videos/ventilador-demo.mp4"
                  className="w-full aspect-video object-cover"
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROBLEM SECTION ==================== */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-600">
              El problema real
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
              ¿Se va constantemente la luz en tu casa?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Miles de familias sufren el calor durante los apagones y no pueden
              descansar durante la noche.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {problemas.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== BENEFITS SECTION ==================== */}
      <section className="py-16 px-4 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
              Beneficios claros
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
              ¿POR QUÉ TODOS QUIEREN UN VENTILADOR SOLAR?
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {beneficiosProducto.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== PRODUCT GALLERY ==================== */}
      <section className="py-16 px-4 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-600">
              Tu compra
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
              MIRA TODO LO QUE RECIBIRÁS EN TU COMPRA
            </h2>
            <p className="text-slate-600 mt-3">
              Revisa a fondo las características y componentes de cada uno de
              nuestros modelos disponibles.
            </p>
          </div>

          {/* Bloque 1: El Modelo Mediano */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-emerald-700 border-b border-emerald-100 pb-2 mb-6 uppercase tracking-wider">
              📸 Galería Modelo Mediano (10")
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-lg">
                <div className="aspect-square rounded-xl overflow-hidden bg-white mb-4 flex items-center justify-center">
                  <img
                    src="/images/ventilador2.jpeg"
                    alt="Ventilador Mediano Frente"
                    className="max-h-[90%] max-w-[90%] object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-sm font-bold text-slate-800">
                    Vista Frontal con Guía
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Detalle de botones frontales y luces indicadoras de carga.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-lg">
                <div className="aspect-square rounded-xl overflow-hidden bg-white mb-4 flex items-center justify-center">
                  <img
                    src="/images/ventilador1.jpeg"
                    alt="Ventilador Mediano Lateral"
                    className="max-h-[90%] max-w-[90%] object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-sm font-bold text-slate-800">
                    Sistema Compacto Integrado
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Fácil de colocar en cualquier repisa, mesa de noche o piso.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-lg">
                <div className="aspect-square rounded-xl overflow-hidden bg-white mb-4 flex items-center justify-center">
                  <img
                    src="/images/ventilador3.jpeg"
                    alt="Ventilador Mediano Accesorios"
                    className="max-h-[90%] max-w-[90%] object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-sm font-bold text-slate-800">
                    Kit Completo de Mesa
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Incluye su panel de captación solar y cables de conexión
                    rápida.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bloque 2: El Modelo Grande */}
          <div>
            <h3 className="text-xl font-bold text-orange-600 border-b border-orange-100 pb-2 mb-6 uppercase tracking-wider">
              📸 Galería Grande Premium (18")
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-lg">
                <div className="aspect-square rounded-xl overflow-hidden bg-white mb-4 flex items-center justify-center">
                  <img
                    src="/images/ventiladorgrande1.jpeg"
                    alt="Ventilador Grande Premium Frente"
                    className="max-h-[90%] max-w-[90%] object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-sm font-bold text-slate-800">
                    Cuerpo Completo y Pedestal
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Estructura robusta de altura ajustable ideal para salas.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-lg">
                <div className="aspect-square rounded-xl overflow-hidden bg-white mb-4 flex items-center justify-center">
                  <img
                    src="/images/ventiladorgrande2.jpeg"
                    alt="Ventilador Grande Panel"
                    className="max-h-[90%] max-w-[90%] object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-sm font-bold text-slate-800">
                    Panel Solar de Mayor Captación
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Carga acelerada y de alto rendimiento energético.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-lg">
                <div className="aspect-square rounded-xl overflow-hidden bg-white mb-4 flex items-center justify-center">
                  <img
                    src="/images/ventiladorgrande3.jpeg"
                    alt="Ventilador Grande Caja de Presentación"
                    className="max-h-[90%] max-w-[90%] object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-sm font-bold text-slate-800">
                    Caja de Presentación 18"
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Empaque original de fábrica, sellado y totalmente protegido.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
              Testimonios
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
              LO QUE DICEN NUESTROS CLIENTES
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center gap-1 text-orange-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FiStar key={index} />
                  ))}
                </div>

                <p className="mt-5 text-slate-700 leading-7">
                  {item === 1 &&
                    "Excelente producto, me ayudó muchísimo durante los apagones y mantuvo la casa con aire fresco."}
                  {item === 2 &&
                    "Muy práctico y fácil de usar. Lo recomiendo totalmente para quienes sufren calor por la noche."}
                  {item === 3 &&
                    "La batería nocturna funciona muy bien y el panel solar hace que sea una inversión excelente."}
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                    C{item}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Cliente {item}
                    </p>
                    <p className="text-sm text-slate-500">
                      Testimonio placeholder
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SPECIAL OFFER ==================== */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-orange-500">
        <div className="max-w-5xl mx-auto rounded-[2rem] border border-white/20 bg-white/10 p-8 md:p-12 text-center text-white shadow-2xl backdrop-blur">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-100">
            Oferta especial
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
            PROMOCIÓN DE LANZAMIENTO
          </h2>
          <p className="mt-4 text-lg text-emerald-50">
            Aprovecha nuestros precios especiales por tiempo limitado.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { label: "Envío GRATIS", icon: FiTruck },
              { label: "Pago Contra Entrega", icon: FiLock },
              { label: "Stock Limitado", icon: FiShield },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/20 bg-slate-900/20 px-4 py-4"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <Icon className="text-xl" />
                  </div>
                  <p className="mt-3 font-semibold">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== GUARANTEE & TRUST ==================== */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:p-10 shadow-sm">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] items-center">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-600">
                  Confianza total
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
                  Compra con tranquilidad
                </h2>
                <p className="mt-3 text-slate-600">
                  Tu compra está respaldada por una experiencia segura, soporte
                  cercano y garantía por defectos de fábrica.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Producto totalmente nuevo", icon: FiShield },
                  { label: "Pago Contra Entrega", icon: FiLock },
                  {
                    label: "Garantía por defectos de fábrica",
                    icon: FiCheckCircle,
                  },
                  { label: "Atención al cliente", icon: FiHeadphones },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-slate-200 bg-white p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                          <Icon className="text-lg" />
                        </div>
                        <span className="font-semibold text-slate-800">
                          {item.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FORM SECTION ==================== */}
      <section
        id="ordenar"
        className="py-16 px-4 bg-emerald-50 border-t border-emerald-100"
      >
        <div className="max-w-xl mx-auto bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-emerald-100">
          <div className="text-center">
            <span className="text-orange-600 font-bold text-sm uppercase tracking-wider block mb-2">
              Promoción
            </span>
            <h3 className="text-3xl font-extrabold text-slate-900">
              ¡RESERVA EL TUYO HOY!
            </h3>
            <p className="mt-3 text-slate-600">
              Completa tus datos y paga únicamente cuando recibas el producto.
            </p>
          </div>

          <div className="mt-8">
            <FormularioPedido />
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
              Preguntas frecuentes
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
              RESPONDEMOS TUS DUDAS
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200 bg-slate-50 shadow-sm overflow-hidden"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span className="font-semibold text-slate-900">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <FiChevronUp className="text-emerald-600" />
                    ) : (
                      <FiChevronDown className="text-emerald-600" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-sm leading-7 text-slate-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
