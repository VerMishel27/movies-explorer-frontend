import "./Techs.css";

function Techs() {
    return (
        <section className="techs">
            <article className="techs__block">
                <h2 className="techs__title">Технологии</h2>
                <h3 className="techs__subtitle">7 технологий</h3>
                <p className="techs__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="techs__item-list">
                    <li className="techs__item-line">HTML</li>
                    <li className="techs__item-line">CSS</li>
                    <li className="techs__item-line">JS</li>
                    <li className="techs__item-line">React</li>
                    <li className="techs__item-line">Git</li>
                    <li className="techs__item-line">Express.js</li>
                    <li className="techs__item-line">mongoDB</li>
                </ul>
            </article>
        </section>
    )
}

export default Techs;