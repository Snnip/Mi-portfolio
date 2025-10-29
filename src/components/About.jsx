const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col min-h-screen w-full bg-yellow-400 text-black p-10 md:p-20 dark:text-slate-200 dark:bg-slate-900">
      <header>
        <h2 className="flex justify-center text-center text-5xl sm:text-7xl md:text-9xl uppercase mt-10 text-white">
          Sobre mi
        </h2>

        <p className="text-center md:text-lg mt-10 md:mt-10 max-w-2xl mx-auto leading-loose">
          <b className="uppercase text-blue-500">Bienvenido/a a mi rincón,</b>
          <br />
          Aquí puedes encontrar más información sobre mí, lo que hago, y mis
          actuales habilidades.
        </p>
      </header>

      <div className="flex flex-col md:flex-row justify-evenly gap-16 text-left mt-16 md:mt-24 leading-loose">
        <div className="md:w-1/2 md:max-w-lg ">
          <h3 className="text-2xl mb-4 uppercase">Echa un vistazo!</h3>
          <p>
            Tras más de cinco años dedicándome al sector de la sanidad, decidí
            apostar por un sector totalmente diferente al que estoy
            ascostumbrada, pero que siempre me ha apasionado. <br />A principios
            de 2023 por fin me lanzo a la gran aventura del desarrollo web y
            tras meses de continuo aprendizaje, esfuerzo y dedicación, empiezo a
            estudiar SAP BTP, y ahí me doy cuenta que realmente adoro este mundo
            y me quiero dedicar a él.
          </p>
          <br />
          <p>
            Actualmente soy consultora SAP en el equipo de integración de
            Avvale, donde participo activamente en proyectos, gestiono y
            resuelvo incidencias, realizo la monitorización de sistemas, entre
            otras tareas, siempre enfocada en optimizar procesos y garantizar el
            funcionamiento eficiente de las soluciones implementadas. Mi enfoque
            está siempre orientado al aprendizaje continuo y al crecimiento
            profesional.
            <br />
            Te animo a que te pongas en {""}
            <a href="#contact">
              <b className="text-blue-500 hover:text-yellow-400">
                contacto conmigo
              </b>
              .
            </a>
          </p>
        </div>

        <div className="md:w-1/2 md:max-w-lg">
          <h3 className="text-2xl mb-6 uppercase">Habilidades</h3>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center justify-center text-white rounded-full  bg-slate-800 w-36 ">
              SAP CI
            </div>
            <div className="flex items-center justify-center text-white rounded-full  bg-slate-800 w-36">
              SAP PO
            </div>
            <div className="flex items-center justify-center text-white rounded-full  bg-slate-800 w-36">
              SAP S/4HANA
            </div>
            <div className="flex items-center justify-center text-white rounded-full  bg-slate-800 w-36 ">
              SAP BTP Cockpit
            </div>
            <div className="flex items-center justify-center text-white rounded-full bg-slate-800 w-36 ">
              HTML
            </div>
            <div className="flex items-center justify-center text-white rounded-full bg-slate-800 w-36 ">
              CSS
            </div>
            <div className="flex items-center justify-center text-white rounded-full bg-slate-800 w-36">
              JavaScript
            </div>
            <div className="flex items-center justify-center text-white rounded-full bg-slate-800 w-36 ">
              React
            </div>
            <div className="flex items-center justify-center text-white rounded-full bg-slate-800 w-36 ">
              Material UI
            </div>
            <div className="flex items-center justify-center text-white rounded-full bg-slate-800 w-36 ">
              Tailwind CSS
            </div>
            <div className="flex items-center justify-center text-white rounded-full bg-slate-800  w-36">
              GitHub
            </div>
          </div>

          <h3 className="text-2xl mt-8 mb-6 uppercase">Habilidades blandas</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center justify-center text-white rounded-full  bg-slate-800 w-40">
              Trabajo en equipo
            </div>
            <div className="flex items-center justify-center text-white rounded-full  bg-slate-800 w-40">
              Atención al detalle
            </div>
            <div className="flex items-center justify-center text-white rounded-full bg-slate-800 w-40 ">
              Constancia
            </div>
            <div className="flex items-center justify-center text-white rounded-full bg-slate-800 w-40 ">
              Organización
            </div>
            <div className="flex items-center justify-center text-white rounded-full bg-slate-800 w-40 ">
              Comunicativa
            </div>
            <div className="flex items-center justify-center text-white rounded-full bg-slate-800 w-40 ">
              Flexibilidad
            </div>
            <div className="flex items-center justify-center text-white rounded-full bg-slate-800 w-40 ">
              Adaptabilidad
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
