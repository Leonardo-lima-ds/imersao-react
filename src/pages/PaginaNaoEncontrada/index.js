import React from 'react';

function PaginaNaoEncontrada() {
    return (
        <div>
            <h1>Erro 404, Página não encontrada :(</h1>
            <video id="background-video" loop autoPlay muted>
                <source src="https://www.youtube.com/embed/J1USmpnJ1A8" />
                <source src="https://www.youtube.com/embed/J1USmpnJ1A8" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default PaginaNaoEncontrada;