export function ButtonRocket ({text, img}) {
    return (
        <button className="button-rocket">
            {text}
            <img src={img} alt="Este es un boton"/>
        </button>
    )
}

