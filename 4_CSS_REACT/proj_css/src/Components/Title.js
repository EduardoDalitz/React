import styles from './Title.module.css';

const Title = ({car}) => {

    return (
    <div>
        <h2 className={styles.my_title}>Conteúdo do componente</h2>

        <h2>Detalhes do carro</h2>
          <ul>
              <li>Marca: {car.modelo}</li>
              <li>ano: {car.ano}</li>
              <li> id: {car.id}</li>
          </ul>

    </div>
  )
}

export default Title