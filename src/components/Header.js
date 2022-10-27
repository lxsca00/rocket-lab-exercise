import icon from '../assets/rocket.svg'

export default function Header () {
    return (
        <header>
            <img src={icon} alt="rocket-lab" className="small-rocket"></img>
        </header>
    )
}