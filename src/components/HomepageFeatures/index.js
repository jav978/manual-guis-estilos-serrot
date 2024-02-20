import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const  minuscula =(arg) => {
  return arg.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
} 

const FeatureList = [
  {
    title: 'Angular Unifica tu desarrollo',
    Svg: require('@site/static/img/undraw_usability_testing_re_uu1g.svg').default,
    description: (
      <>
        <p>Con la Guía de Estilos Angular, crea aplicaciones web consistentes, eficientes y con una estética impecable.</p>
      </>
    ),
  },
  {
    title: 'Ahorra tiempo y esfuerzo',
    Svg: require('@site/static/img/undraw_add_information_j2wg.svg').default,
    description: (
      <>
        <p>Olvídate de reinventar la rueda. La Guía de Estilos Angular te ofrece componentes predefinidos y buenas prácticas para agilizar tu desarrollo.</p>
      </>
    ),
  },
  {
    title: 'La llave para una experiencia de usuario excepcional',
    Svg: require('@site/static/img/undraw_heatmap_uyye.svg').default,
    description: (
      <>
        <p> La Guía de Estilos Angular te ayuda a implementar los principios de accesibilidad y diseño web responsive.</p>
      </>
    ),
  },
  
  // {
  //   title: 'Corporate Manager',
  //   Svg: require('@site/static/img/undraw_usability_testing_re_uu1g.svg').default,
  //   description: (
  //     <>
  //      Usuario Corporate Manager.
  //     </>
  //   ),
  // },
  // {
  //   title: 'IT',
  //   Svg: require('@site/static/img/undraw_add_information_j2wg.svg').default,
  //   description: (
  //     <>
  //       Usuario Information technology.
  //     </>
  //   ),
  // },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')} id="content" >
      <div className="card" >
        <div className="card__image text--center">
          <Svg className={styles.featureSvg} role="img" alt="Image"
        title={title}/>
        </div>
        <div className="card__header text--center padding-horiz--md ">
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>          

        </div>     
        <div className="card__footer">
          <div className={styles.buttons}>
            {/* <Link
              className="button button--block button--primary button--lg "
              to={`/docs/usuarios/${'user_' + minuscula(title)}`}>
              Acceder
            </Link> */}
          </div>
        </div> 
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* <h1 className="hero__title" style={{textAlign: 'center', margin: '10px'}}> </h1> */}

        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
