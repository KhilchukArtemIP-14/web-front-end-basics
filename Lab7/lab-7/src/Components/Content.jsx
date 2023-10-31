import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fifthToggled: false,
      sixthToggled: false,
    };

  }

  handleClick() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      isClicked: !prevState.isClicked,
    }));
  }

  toggleFifth = () => {
    this.setState((prevState) => ({
      fifthToggled: !prevState.fifthToggled,
    }));
  }

  toggleSixth = () => {
    this.setState((prevState) => ({
      sixthToggled: !prevState.sixthToggled,
    }));
  }

  render() {

    const fifthToggledStyle = {
      backgroundColor: this.state.fifthToggled ? 'blue' : '',
      color:  this.state.fifthToggled ? 'white' : '',
    };

    const sixthToggledStyle = {
      backgroundColor: this.state.sixthToggled ? 'green' : '',
      color: this.state.sixthToggled ? 'yellow' : '',
    };

    return (
      <div>
        <p>Народився: 24.04.2004, м.Славута</p>
        <p>Освіта:</p>
        <ul>
          <li type="none" style={fifthToggledStyle} onClick={this.toggleFifth}>
            ЗОШ I-III ступенів №1 м. Славути
          </li>
          <li type="none" style={sixthToggledStyle} onClick={this.toggleSixth}>
            КПІ ім. Ігоря Сікорського, ФІОТ
          </li>
        </ul>
        <br/>

    <p>Хоббі:</p>
    <ul>
        <li>Геймінг</li>
        <li>Читання манги та лайт новел</li>
        <li>Прослуховування музики</li>
    </ul>
    <br/>

    <p>Улюблені книги/фільми:</p>
    <ol>
        <li>Is it wrong to hope for an encounter in a dungeon?</li>
        <li>Limitless(2011)</li>
        <li>Тигролови</li>
    </ol>
    <br/>

    <p>Найулюбленіше місто, де я побував - Славута</p>
    <p>Славу́та (первісна назва — Славутин) — місто в Шепетівському району Хмельницької області України, адміністративний центр Славутської міської територіальної громади. Місто розташоване на річках Горинь та Утка за 317 км від м. Києва, 74 км від м. Рівне та 118 км від м. Хмельницького (автомобільними шляхами). Залізнична станція Славута 1. Через місто проходить автошлях Н 25. Відоме з 1617 року. 1633 року місто отримало Магдебурзьке право. Статус міста обласного значення з 1979 року. Існує декілька версій походження назви міста. Серед найбільш вірогідних, топонім пов'язаний з іменем князівського роду власників земель — Заславських, які таким чином прагнули увічнити себе у назві новозаснованого міста. Згідно іншої версії, етимологія назви пов'язується із гідронімом «Славута»  («Інвентарний опис міста Славутина, що над річкою Славутою лежить», 1701 р.). </p>

      </div>
    );
  }
}

export default Content;