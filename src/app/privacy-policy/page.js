export function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "Privacy policy",
    description: "Learn more about our company and team",
    domain: "https://ecommerce.com",
    keywords: ["Privacy policy", "E-Commerce"],
  };
}

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-90">
      <h1 className="text-3xl font-bold text-center mt-10 text-orange-500">
        Política de Privacidad
      </h1>
      <p className="mt-4 text-lg max-w-lg text-center">
        En OffBeat, valoramos tu privacidad y estamos comprometidos a proteger
        tu información personal. Esta política de privacidad describe cómo
        recopilamos, usamos y compartimos tu información cuando visitas nuestro
        sitio web o realizas una compra.
        <br />
        <strong>Recopilación de Información:</strong> Recopilamos información
        personal, como tu nombre, dirección de correo electrónico y detalles de
        pago, cuando realizas una compra o te registras en nuestro sitio.
        <br />
        <strong>Uso de la Información:</strong> Utilizamos tu información para
        procesar tus pedidos, comunicarnos con vos sobre tu compra y mejorar
        nuestros servicios.
        <br />
        <strong>Compartir Información:</strong> No vendemos ni alquilamos tu
        información personal a terceros. Solo compartimos tu información con
        proveedores de servicios necesarios para completar tu pedido, como
        procesadores de pagos y servicios de envío.
        <br />
        <strong>Seguridad:</strong> Implementamos medidas de seguridad para
        proteger tu información personal contra accesos no autorizados,
        divulgación o destrucción.
      </p>
    </div>
  );
}
