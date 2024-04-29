import wrench from "../assets/wrench.png";
import emojis from "../assets/emojis.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center gap-8 min-h-screen w-full p-8 md:p-20 mx-auto bg-white text-black dark:text-slate-200 dark:bg-slate-900">
      <header>
        <h2 className="text-yellow-400 flex justify-center text-5xl sm:text-7xl md:text-9xl uppercase mt-10">
          Proyectos
        </h2>

        <p className="text-center md:text-lg mt-10 max-w-2xl mx-auto leading-loose">
          Aquí puedes encontrar los proyectos en los que he colaborado.{" "}
        </p>
      </header>

      <div>
        <h3 className="text-2xl md:text-3xl uppercase text-center mt-20 pb-2 border-b-2 border-blue-500">
          Front-end
        </h3>

        <article className="flex flex-col md:flex-row lg:w-3/4 lg:mx-auto items-center gap-10 md:gap-20 mt-14">
          <img
            src={wrench}
            alt="Imagen de captura de pantalla del proyecto Wrench"
            className="h-80 md:h-96 lg:h-auto"
          />

          <section>
            <h4 className="text-lg md:text-2xl mb-4 animate-fade-down animate-duration-1">
              Wrench
            </h4>
            <p className="leading-loose">
              Wrench es una aplicación web contruída con React, Vite, Material
              UI, y CSS, diseñada para facilitar servicios generados por
              usuarios para modificaciones de archivos digitales. Con Wrench,
              los usuarios pueden crear, solicitar y colaborar en servicios para
              diversas modificaciones digitales. Ya se trate de editar una
              imagen, formatear o cualquier otra modificación. Wrench conecta a
              los usuarios con personas con talento que pueden ayudarles.
            </p>
            <button className="text-white rounded-full px-12 py-2 text-center mt-6 text-lg transition ease-in-out delay-100 bg-blue-500  hover:-translate-y-1 hover:scale-110 hover:bg-slate-800 duration-300 dark:hover:bg-yellow-500">
              <a
                href="https://github.com/AkazaXeros/portal-necesidades-digitales-app"
                target="_blank"
                rel="noopener noreferrer">
                Link
              </a>
            </button>
          </section>
        </article>

        <article className="flex flex-col md:flex-row lg:w-3/4 lg:mx-auto items-center gap-10 md:gap-20 mt-20">
          <img
            src={emojis}
            alt="Imagen de captura de pantalla del proyecto Parejas de Emojis"
            className="h-80 md:h-96 lg:h-auto"
          />

          <section>
            <h4 className="text-lg md:text-2xl mb-4 animate-fade-down animate-duration-1">
              Parejas de Emoji
            </h4>
            <p className="leading-loose">
              Parejas de emoji es un juego de memoria creado con HTML, CSS y
              JavaScript, en la que se muestras 16 pares de cartas cunierta que
              pueden descubrirse de dos en dos hasta que se revelen todas.
            </p>
            <button className="text-white rounded-full px-12 py-2 text-center mt-6 text-lg transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-slate-800 duration-300 dark:hover:bg-yellow-500">
              <a
                href="https://github.com/AkazaXeros/Parejas-de-Emoji"
                target="_blank"
                rel="noopener noreferrer">
                Link
              </a>
            </button>
          </section>
        </article>
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl uppercase text-center mt-20 pb-2 border-b-2 border-blue-500">
          Back-end
        </h3>

        <article className="flex flex-col lg:w-3/4 lg:mx-auto  mt-14">
          <h4 className=" text-lg md:text-2xl mb-4 animate-fade-down animate-duration-1">
            Portal de Necesidades Digitales
          </h4>
          <p className="leading-loose">
            API que permite gestionar un sitio web donda las personas que
            necesitan algún servicio digital puedan pedir ayuda a otros
            usuarios. La API está contruída con Node.js and Express. Y la base
            de datos con MySQL.
          </p>
          <p className="leading-loose">
            Ejemplo: traducir un texto, editar una foto, revisar un documento...
            Sólo necesita que se pueda hacer a través de un archivo digital.
          </p>

          <button className="text-white rounded-full w-48 py-2 text-center mt-6 text-lg transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-slate-800 duration-300 dark:hover:bg-yellow-500">
            <a
              href="https://github.com/Snnip/Portal-de-necesidades-digitales"
              target="_blank"
              rel="noopener noreferrer">
              Link
            </a>
          </button>
        </article>
      </div>
    </div>
  );
};

export default Projects;
