const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col min-h-100 w-full bg-yellow-400 text-black p-10 md:p-20 dark:text-slate-200 dark:bg-slate-900">
      <header>
        <h2 className="flex flex-row justify-center text-5xl text-white sm:text-7xl md:text-9xl mt-10 uppercase">
          Contacto
        </h2>
      </header>

      <div className="flex flex-col justify-center items-center text-center mt-10 ">
        <p className="w-2/3 md:text-lg mb-20 ">
          No dudes en ponerte en contacto conmigo. Puedes hacerlo a través del
          siguiente mail ➡️ <b>sanpb10@gmail.com</b>
          <br />
          Muchas gracias de antemano.
        </p>
      </div>
    </div>
  );
};

export default Contact;
