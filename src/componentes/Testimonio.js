import React from "react";

function Testimonio () {
    return (
        <div className="cont-testimonio">
            <img className="img-testimonio" src={require("../images/cat.png")} alt="Cat-1"/>

            <div className="info-testimonio">
                <p className="name-testimonio">Kitty Kitty</p>
                <p className="cargo-testimonio">Jefe</p>
                <p className="text-testimonio">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book"</p>
            </div>
        </div>
    );
}

export default Testimonio;