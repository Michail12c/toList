import React from 'react'

const Footer = () => {
  return(
    <div className = 'footer'>
        <footer className="page-footer #558b2f light-green darken-3">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Записник</h5>
                <p className="grey-text text-lighten-4">Додаток для створення ласкавого та розумного тайм-менеджменту.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Дізнатися більше</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/michail-tsoma-098643116/">Linkedin</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://github.com/Michail12c">GitHub</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Сайт портфоліо</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2020 Copyright Text
            <a className="grey-text text-lighten-4 right" href="https://github.com/Michail12c/todoList">More about project</a>
            </div>
          </div>
        </footer>
    </div>
  )
}
export default Footer