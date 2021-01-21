import styles from './RocketDetailPage.module.scss'

function RocketDetailPage(props) {
    
    return (
        <div className={styles.RocketDetails}>
        <h1>Rocket Detail Page</h1>
        <p>Name: {props.rocket.name}</p>
        <p>Description: {props.rocket.description}</p>
        <p>Active: {props.rocket.active}</p>
        <p>Engine: {props.rocket.engines.type}</p>
        <p>Height: {props.rocket.height.feet}</p>
        <p>Cost per launch: {props.rocket.cost_per_launch}</p>
        <p>First flight: {props.rocket.first_flight}</p>
        </div>
    )
}

export default RocketDetailPage