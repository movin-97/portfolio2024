const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-start -mb-5 max-w-full w-[676px] max-md:mb-2.5">
        <div className="text-2xl font-bold tracking-wide text-white">Contact</div>
        <div className="flex gap-1.5 mt-6 text-sm font-semibold tracking-wide whitespace-nowrap text-stone-300">
          <div>
            <i className="fa-regular fa-envelope"></i>
          </div>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=thanamovin1997@gmail.com"
            target="_blank"
          >
            <div className="basis-auto">thanamovin1997@gmail.com</div>
          </a>
        </div>
        <div className="flex gap-7 items-center mt-10 max-md:mt-10">
          <div>
            <a
              href="https://www.instagram.com/mr_movin_d/profilecard/?igsh=MWdsbnpjdXFkbDFieQ"
              target="_blank"
            >
              <i className="fa-brands fa-instagram text-3xl text-white"></i>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/movin-d-a64ab212a" target="_blank">
              <i className="fa-brands fa-linkedin text-3xl text-white"></i>
            </a>
          </div>
          <div>
            <a href="https://x.com/MOVIN15584994" target="_blank">
              <i className="fa-solid fa-x text-3xl text-white"></i>
            </a>
          </div>
          <div>
            <a href="https://wa.me/918903716144" target="_blank">
              <i className="fa-brands fa-whatsapp text-3xl text-white"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
