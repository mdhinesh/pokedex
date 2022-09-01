import React from "react";

export default function Pokemoncard({ id, image, name, type, _callback }) {
    const style = `thumb-container ${type}`;
    return (
        <div className={style}>
            <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
        // <div>
        //     {pokemon.map(p => (
        //         <div key={p}>{p}</div>
        //     ))}
        // </div>
    )
}