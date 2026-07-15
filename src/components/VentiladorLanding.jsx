import { BiSun, BiBattery, BiPlug, BiUsb } from 'react-icons/bi';
import { FiAlertCircle, FiShoppingCart } from 'react-icons/fi';
import FormularioPedido from './FormularioPedido';
import Header from './header';

export default function VentiladorLanding() {
  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen font-sans">
      <Header />
      {/* HERO */}
    {/* HERO */}
      <header className="bg-white border-b border-slate-100 py-8 md:py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          
          {/* Columna Izquierda: Textos y Botón */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <BiSun className="text-sm" /> Innovación Solar
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-4 text-slate-900 leading-tight">
              ¡Olvídate de los Apagones y del Recibo de la Luz! El Ventilador Solar Inteligente que Nunca se Apaga
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 mt-4 max-w-lg">
              Mantén tu casa fresca todo el día y la noche 100% gratis con energía solar.
            </p>

            <div className="mt-8 w-full md:w-auto">
              <a href="#ordenar" className="inline-flex items-center justify-center gap-2 w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all transform hover:scale-105">
                <FiShoppingCart /> Pedir Contra Entrega - Envío Gratis Hoy
              </a>
            </div>
          </div>

          {/* Columna Derecha: Fotos del producto */}
          <div className="w-full">
            {/* Contenedor de la Imagen Principal */}
            <div className="w-full h-64 md:h-[400px] rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-white">
              <img 
                src="/images/ventilador1.jpeg" 
                alt="Ventilador Solar Principal" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Fotos de Detalle Secundarias */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-white">
                <img 
                  src="/images/ventilador2.jpeg" 
                  alt="Ventilador Solar Detalle 1" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-white">
                <img 
                  src="/images/ventilador3.jpeg" 
                  alt="Ventilador Solar Detalle 2" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* SECCIÓN DEL DOLOR */}
      <section className="py-12 px-4 bg-slate-100 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <FiAlertCircle className="text-slate-400 text-3xl mb-3" />
          <h2 className="text-xl md:text-2xl font-bold text-slate-700 italic">
            "¿Cansado de que se vaya la luz a mitad de la noche y el calor no te deje dormir?"
          </h2>
        </div>
      </section>

      {/* CARACTERÍSTICAS */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h4 className="text-lg font-bold text-emerald-600 flex items-center gap-2"><BiSun className="text-amber-500" /> Energía Infinita</h4>
            <p className="text-slate-600 mt-2">Funciona directo con el sol sin gastar luz convencional.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h4 className="text-lg font-bold text-emerald-600 flex items-center gap-2"><BiBattery className="text-emerald-500" /> Batería Nocturna</h4>
            <p className="text-slate-600 mt-2">Almacena la carga para darte aire fresco toda la noche.</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN FORMULARIO */}
      <section id="ordenar" className="py-16 px-4 bg-emerald-50 border-t border-emerald-100 text-center">
        <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-xl border border-emerald-100">
          <span className="text-orange-600 font-bold text-sm uppercase tracking-wider block mb-2">Promoción</span>
          <h3 className="text-2xl font-extrabold text-slate-900 mb-6">50% de Descuento Hoy</h3>
          
          {/* Aquí inyectamos el formulario limpio y le decimos qué producto es */}
          <FormularioPedido producto="ventilador" />
        </div>
      </section>
    </div>
  );
}