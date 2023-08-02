import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="background">
            <div className="about-container">
                <h2 className="about-title">Sobre Nosotros</h2>
                <p className="about-paragraph animated">
                Somos una empresa líder en el sector, dedicada a proporcionar soluciones innovadoras para nuestros clientes. Nuestra misión es brindar productos y servicios de alta calidad que superen las expectativas de nuestros clientes.
                </p>
                <p className="about-paragraph animated">
                En nuestra empresa, valoramos el trabajo en equipo, la creatividad y el compromiso con la excelencia. Estamos comprometidos a mantener altos estándares de ética empresarial y responsabilidad social.
                </p>
                <h3 className="about-title">Nuestra Historia</h3>
                <p className="about-paragraph animated">
                Fundada en [año de fundación], hemos crecido desde una pequeña startup hasta una empresa consolidada con presencia en varios países. A lo largo de nuestra historia, hemos mantenido nuestro enfoque en la satisfacción del cliente y la innovación continua.
                </p>
                <h3 className="about-title">Nuestra Misión</h3>
                <p className="about-paragraph animated">
                Nuestra misión es [misión de la empresa]. Trabajamos arduamente para cumplir con esta misión cada día, brindando soluciones que agreguen valor y mejoren la vida de nuestros clientes.
                </p>
                <h3 className="about-title">Nuestros Valores</h3>
                <ul className="about-paragraph animated">
                <li>Calidad: Nos esforzamos por ofrecer productos y servicios de la más alta calidad.</li>
                <li>Innovación: Buscamos constantemente nuevas formas de mejorar y adaptarnos a las necesidades cambiantes del mercado.</li>
                <li>Integridad: Actuamos con honestidad, transparencia y ética en todo lo que hacemos.</li>
                <li>Responsabilidad: Asumimos la responsabilidad de nuestros actos y su impacto en la sociedad.</li>
                <li>Colaboración: Trabajamos en equipo para lograr resultados excepcionales.</li>
                </ul>
            </div>
        </div>
    );
};

export default About;
