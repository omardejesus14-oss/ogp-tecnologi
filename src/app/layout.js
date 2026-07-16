import Script from 'next/script'; // Importamos el cargador de scripts nativo de Next.js
import './globals.css';

export const metadata = {
  title: 'OGP Technology | Ventilador Solar',
  description: 'La mejor tecnología solar en Colombia',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Script oficial de Meta Pixel optimizado */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1063965206188475');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
