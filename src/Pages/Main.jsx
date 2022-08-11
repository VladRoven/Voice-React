import React from 'react';
import Button from '../Components/Button';
import '../Assets/Styles/Global.scss';
import Style from '../Assets/Styles/Main.module.scss';
import Logo from '../Assets/Images/logo.png';
import { Link } from 'react-router-dom';
import ForWhatFirst from '../Assets/Images/forWhat_1.png';
import ForWhatSecond from '../Assets/Images/forWhat_2.png';
import ForWhatThird from '../Assets/Images/forWhat_3.png';
import WhatToDoFirst from '../Assets/Images/whatToDo_1.png';
import WhatToDoSecond from '../Assets/Images/whatToDo_2.png';
import WhatToDoThird from '../Assets/Images/whatToDo_3.png';


const Main = () => {
    return (
        <React.Fragment>
            <main>
                <section className={ Style.header }>
                    <div>
                        <h1>Сервіс онлайн <br />опитувань</h1>
                        <Link to="/signup">
                            <Button>Реєстрація</Button>
                        </Link>
                    </div>
                    <img src={ Logo } alt="Логотип" />
                </section>
                <a href="#scroll" className={ Style.arrow }>
                    <div className={ Style.move }>
                        <div className={ Style.notMove }>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </a>
                <section id="scroll" className={ Style.forWhat }>
                    <h1>Для чого потрібен?</h1>
                    <article>
                        <section>
                            <img src={ ForWhatFirst } alt="" />
                            <p>
                                Онлайн опитування це найефективніший спосіб <br />
                                проаналізувати попит на товар і зрозуміти свою <br />
                                цільову аудиторію. </p>
                        </section>
                    </article>
                    <div></div>
                    <article>
                        <section>
                            <img src={ ForWhatSecond } alt="" />
                            <p>
                                Збирайте матеріал, щоб краще пізнати свого <br />
                                клієнта, а відповідно за допомогою цієї інформації <br />
                                підвищуйте прибуток. </p>
                        </section>
                    </article>
                    <article>
                        <section>
                            <img src={ ForWhatThird } alt="" />
                            <p>
                                За допомогою опитувань вивчайте думки з того <br />
                                чи іншого соціального питання різних груп <br />
                                населення. </p>
                        </section>
                    </article>
                </section>
                <section className={ Style.whatToDo }>
                    <h1>Що ви можете зробити за допомогою нашого сервісу?</h1>
                    <article>
                        <section>
                            <img src={ WhatToDoFirst } alt="" />
                            <h3>Створити опитування</h3>
                            <p>
                                Зручний конструктор <br />
                                опитувань. 3 типа <br />
                                питань і налаштування <br />
                                логічних правил.</p>
                        </section>
                        <section>
                            <img src={ WhatToDoSecond } alt="" />
                            <h3>Зібрати відповіді</h3>
                            <p>
                                Онлайн-панель з <br />
                                великою кількістю <br />
                                активних <br />
                                респондентів.</p>
                        </section>
                        <section>
                            <img src={ WhatToDoThird } alt="" />
                            <h3>Отримати результат</h3>
                            <p>
                                Результати <br />
                                опитування в форматі <br />
                                Excel.</p>
                        </section>
                    </article>
                </section>
            </main>
        </React.Fragment>
    );
};

export default Main;
