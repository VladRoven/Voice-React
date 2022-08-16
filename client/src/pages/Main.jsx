import React from 'react';
import Button from '../components/Button';
import Style from '../assets/styles/Main.module.scss';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import ForWhatFirst from '../assets/images/forWhat_1.png';
import ForWhatSecond from '../assets/images/forWhat_2.png';
import ForWhatThird from '../assets/images/forWhat_3.png';
import WhatToDoFirst from '../assets/images/whatToDo_1.png';
import WhatToDoSecond from '../assets/images/whatToDo_2.png';
import WhatToDoThird from '../assets/images/whatToDo_3.png';
import WhyVoiceFirst from '../assets/images/whyVoice_1.png';
import WhyVoiceSecond from '../assets/images/whyVoice_2.png';
import WhyVoiceThird from '../assets/images/whyVoice_3.png';


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
                    <span></span>
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
                                Онлайн опитування це найефективніший спосіб
                                проаналізувати попит на товар і зрозуміти свою
                                цільову аудиторію. </p>
                        </section>
                    </article>
                    <div></div>
                    <article>
                        <section>
                            <img src={ ForWhatSecond } alt="" />
                            <p>
                                Збирайте матеріал, щоб краще пізнати свого
                                клієнта, а відповідно за допомогою цієї інформації
                                підвищуйте прибуток. </p>
                        </section>
                    </article>
                    <article>
                        <section>
                            <img src={ ForWhatThird } alt="" />
                            <p>
                                За допомогою опитувань вивчайте думки з того
                                чи іншого соціального питання різних груп
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
                                Зручний конструктор
                                опитувань. 3 типа
                                питань і налаштування
                                логічних правил.</p>
                        </section>
                        <section>
                            <img src={ WhatToDoSecond } alt="" />
                            <h3>Зібрати відповіді</h3>
                            <p>
                                Онлайн-панель з
                                великою кількістю
                                активних
                                респондентів.</p>
                        </section>
                        <section>
                            <img src={ WhatToDoThird } alt="" />
                            <h3>Отримати результат</h3>
                            <p>
                                Результати
                                опитування в форматі
                                Excel.</p>
                        </section>
                    </article>
                </section>
                <section className={ Style.whyVoice }>
                    <h1>Чому саме Voice?</h1>
                    <article>
                        <section>
                            <img src={ WhyVoiceFirst } alt="" />
                            <h3>Простота</h3>
                            <p>Простий інтерфейс та зручний конструктор створення опитувань</p>
                        </section>
                        <section>
                            <img src={ WhyVoiceSecond } alt="" />
                            <h3>Це безкоштовно</h3>
                            <p>Ви економите час і гроші створюючи опитування безкоштовно</p>
                        </section>
                        <section>
                            <img src={ WhyVoiceThird } alt="" />
                            <h3>Підтримка</h3>
                            <p>24/7 підтримка клієнтів і швидка реакція</p>
                        </section>
                    </article>
                </section>
            </main>
        </React.Fragment>
    );
};

export default Main;