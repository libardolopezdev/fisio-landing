import retrato from "../../assets/images/retrato-profesional.png";

export default function Hero() {
  return (
    <section className="w-full">

      <div className="relative">

        <img
          src={retrato}
          alt="Fisioterapeuta Camila Suarez"
          className="w-full h-[420px] object-cover"
        />

        {/* Overlay profesional */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">

          <div className="text-center text-white px-4">

            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              Recupera tu movimiento
            </h1>

            <p className="max-w-xl mx-auto text-lg">
              Atención fisioterapéutica personalizada para tu bienestar físico.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
