import PropTypes from 'prop-types';

const valor_menssage = 'asd123'; //No esta en el scope global
//Dejando esta variable por fuera no va ser 'reprocesado'
//en caso de que el componente se requiere ser 'rerenderizado'

export const FirstApp = ( { name } ) => {
    //Si tenemos una variable que solo contiene un valor
    //digamos tomado del local storage, se recomienda tenerlo
    //afuera del export, de forma que este encapsulado solo en
    //el componente, ej: se movio arriba 'valor_menssage'
    //
    // const valor_menssage = 'asd123';

    //Se puede hacer validaciones directas
    // 
    // if( !name ){
    //     throw new Error('No envia el name')
    // }

    return (
    <>
        <h1>{ name } : { valor_menssage } </h1>
        <p>Esto es un parrafo</p>
    </>
    )
}

FirstApp.propTypes = {
    name: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    name: 'Este es el name defaultProps'
}