'use client';


import { useState } from 'react';
import { createClient } from '@/utils/supabase/client'; // Tu importación original intacta
import { FiCheckCircle, FiTag, FiTruck } from 'react-icons/fi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function FormularioPedido() {
  // Inicializamos el cliente de Supabase aquí adentro
  const supabase = createClient();

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [modelo, setModelo] = useState('mediano'); // Estado para controlar el modelo seleccionado
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState('');

  // Precios y detalles de cada modelo
  const precios = {
    mediano: 160000,
    grande: 310000
  };

  const handleOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const precioFinal = precios[modelo];
    const nombreProducto = modelo === 'mediano' ? 'Ventilador Solar Inteligente Mediano (10")' : 'Ventilador Solar Inteligente Grande (Premium)';

    try {
      // 1. Guarda en tu tabla 'pedidos' usando el cliente inicializado
      const { error: supabaseError } = await supabase
        .from('pedidos')
        .insert([{ 
          nombre, 
          telefono, 
          producto: `${nombreProducto} - $${precioFinal.toLocaleString('es-CO')}` 
        }]);

      if (supabaseError) throw supabaseError;

      // 2. Si guarda con éxito, disparamos la redirección a WhatsApp
      const tuNumeroCelular = "573103826983"; 
      const mensajeWhatsApp = `¡Hola! Vi el *${nombreProducto}* ☀️ en su página de OGP Tecnología y me interesa. %0A%0A` +
        `Mis datos de contacto son:%0A` +
        `👤 *Nombre:* ${nombre}%0A` +
        `📞 *Celular:* ${telefono}%0A` +
        `📦 *Modelo:* ${modelo === 'mediano' ? 'Mediano ($160.000)' : 'Grande ($310.000)'}%0A%0A` +
        `Me gustaría recibir más información para coordinar el envío contra entrega.`;

      // Evento de Conversión en Facebook
      if (window.fbq) {
        window.fbq('track', 'Purchase', {
          value: precioFinal,
          currency: 'COP',
        });
      }

      // Abre WhatsApp en una pestaña nueva
      window.open(`https://wa.me/${tuNumeroCelular}?text=${mensajeWhatsApp}`, '_blank');

      // 3. Limpiamos estados y mostramos pantalla de éxito
      setEnviado(true);
      setNombre('');
      setTelefono('');
    } catch (err) {
      console.error(err);
      setError('Hubo un error. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  if (enviado) {
    return (
      <div className="bg-emerald-50 text-emerald-800 p-6 rounded-2xl border border-emerald-200 flex flex-col items-center gap-2 text-center">
        <FiCheckCircle className="text-4xl text-emerald-600" />
        <h4 className="text-lg font-bold">¡Pedido Recibido!</h4>
        <p className="text-sm">Te abrimos un chat en WhatsApp para confirmar la entrega, si no abrió dale click abajo.</p>
        <a 
          href={`https://wa.me/573103826983?text=Hola!%20Registré%20mi%20pedido%20en%20la%20web%20y%20quiero%20confirmar.`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-2 text-xs text-emerald-600 underline font-semibold"
        >
          Abrir chat manualmente
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleOrder} className="text-left space-y-4">
      
      {/* SECCIÓN LLAMATIVA DE PRECIO Y OFERTA DINÁMICA */}
      <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-4 mb-2 text-center">
        <span className="inline-block bg-orange-500 text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2">
          🔥 OFERTA DE LANZAMIENTO
        </span>
        <div className="flex items-center justify-center gap-3">
          <span className="text-sm line-through text-slate-400 font-medium">
            {modelo === 'mediano' ? '$220.000 COP' : '$420.000 COP'}
          </span>
          <span className="text-2xl font-black text-emerald-700">
            ${precios[modelo].toLocaleString('es-CO')} COP
          </span>
        </div>
        <p className="text-[11px] text-slate-500 mt-1 font-medium flex items-center justify-center gap-1">
          <FiTruck className="text-emerald-600 inline" /> Envío GRATIS + Pago Contra Entrega en todo el país
        </p>
      </div>

      {/* SELECCIÓN DE TAMAÑO */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Selecciona tu modelo</label>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setModelo('mediano')}
            className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center transition-all ${
              modelo === 'mediano'
                ? 'border-emerald-600 bg-emerald-50 text-emerald-800 font-bold'
                : 'border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <span className="text-[10px] uppercase font-bold tracking-wider">Mediano (10")</span>
            <span className="text-base font-extrabold mt-0.5">$160.000</span>
          </button>
          <button
            type="button"
            onClick={() => setModelo('grande')}
            className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center transition-all ${
              modelo === 'grande'
                ? 'border-emerald-600 bg-emerald-50 text-emerald-800 font-bold'
                : 'border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <span className="text-[10px] uppercase font-bold tracking-wider">Grande (Premium)</span>
            <span className="text-base font-extrabold mt-0.5">$310.000</span>
          </button>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase">Nombre Completo</label>
        <input 
          type="text" required value={nombre} onChange={(e) => setNombre(e.target.value)}
          placeholder="Ej. Juan Pérez" className="w-full mt-1 p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800" 
        />
      </div>
      
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase">Teléfono / Celular</label>
        <input 
          type="tel" required value={telefono} onChange={(e) => setTelefono(e.target.value)}
          placeholder="Ej. 3103826983" className="w-full mt-1 p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800" 
        />
      </div>
      
      {error && <p className="text-red-600 text-sm font-semibold">{error}</p>}
      
      <button type="submit" disabled={loading} className="w-full inline-flex justify-center items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold p-4 rounded-xl shadow-md transition-all disabled:bg-slate-400 mt-2">
        {loading ? <AiOutlineLoading3Quarters className="animate-spin text-xl" /> : <FiCheckCircle />}
        {loading ? 'Procesando...' : `Confirmar Pedido - $${precios[modelo].toLocaleString('es-CO')}`}
      </button>
    </form>
  );
}