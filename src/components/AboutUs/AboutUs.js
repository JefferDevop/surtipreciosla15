import styles from "./AboutUs.module.scss";

export function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h1>Nosotros</h1>
        <p>
          ¡Bienvenidos a Surtiprecios la 15! Somos una empresa dedicada a
          ofrecer a nuestros clientes la mejor experiencia de compra. En
          Surtiprecios la 15, nos enfocamos en brindar una amplia variedad de
          productos a precios accesibles y competitivos, sin sacrificar la
          calidad de los mismos. Nuestro compromiso es ofrecer un servicio
          excepcional a nuestros clientes, generando la mayor rapidez en la
          entrega de los productos. Además, nuestro equipo de atención al
          cliente está siempre dispuesto a ayudar y resolver cualquier duda o
          problema que pueda surgir. Nos enorgullece ser una empresa 100%
          colombiana, comprometida con el desarrollo del país y la generación de
          empleo local. Trabajamos con proveedores confiables y de calidad, para
          garantizar que nuestros clientes reciban productos de primera línea.
          En Surtiprecios la 15, estamos en constante evolución para mejorar
          nuestros procesos y ofrecer un servicio cada vez mejor. ¡Gracias por
          confiar en nosotros!
        </p>
      </div>

      <div className={styles.mision}>
        <h5>Misión</h5>
        <p>
          Nuestra misión en Surtiprecios la 15 es brindar a nuestros clientes
          una experiencia de compra fácil, segura y confiable. Nos esforzamos
          por ofrecer una amplia variedad de productos de alta calidad a precios
          accesibles, para que nuestros clientes puedan satisfacer todas sus
          necesidades y deseos sin comprometer su presupuesto. Creemos en la
          importancia de la atención al cliente, por lo que trabajamos
          arduamente para garantizar que todos nuestros clientes reciban un
          servicio excepcional. Estamos comprometidos con la transparencia, la
          honestidad y la integridad en todas nuestras operaciones. Además, en
          Surtiprecios la 15 valoramos la sostenibilidad y el impacto positivo
          en nuestro entorno. Trabajamos con proveedores locales y buscamos
          minimizar nuestro impacto ambiental en todas nuestras operaciones.
          Nuestra misión es convertirnos en la tienda preferida de nuestros
          clientes, ofreciendo una experiencia de compra satisfactoria y
          confiable. Estamos comprometidos a crecer y mejorar constantemente
          para cumplir con nuestras metas y superar las expectativas de nuestros
          clientes.
        </p>
      </div>

      <div className={styles.vision}>
        <h5>Visión</h5>
        <p>
          En Surtiprecios la 15, nuestra visión es ser líderes en el mercado de
          Colombia, reconocidos por nuestra calidad, servicio excepcional y
          precios accesibles. Queremos ofrecer una amplia gama de productos a
          precios competitivos, sin comprometer la calidad y la atención al
          cliente. Buscamos ser una empresa innovadora y tecnológicamente
          avanzada, adaptándonos constantemente a las necesidades y deseos de
          nuestros clientes y ofreciendo soluciones eficientes y efectivas.
          Queremos ser una empresa sostenible y responsable, contribuyendo al
          desarrollo económico y social del país y minimizando nuestro impacto
          ambiental. Nuestra visión es convertirnos en la opción preferida de
          compra para nuestros clientes, ofreciendo un servicio excepcional y
          una experiencia de compra satisfactoria en todo momento. Estamos
          comprometidos a crecer y expandirnos, tanto en alcance como en
          variedad de productos y servicios, para ofrecer siempre lo mejor a
          nuestros clientes.
        </p>
      </div>

      <div className={styles.phone}>
        <h5>Líneas de atención</h5>
        <ul>
          <li>(+57) 313 636 4253</li>
          <li>(+57) 314 572 1972</li>
        </ul>
      </div>

      <div className={styles.adress}>
        <h5>Ubicación:</h5>
        <p>Cll 15 # 9-60, Centro de Cali</p>
      </div>
    </div>
  );
}
