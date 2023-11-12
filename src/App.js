import logo from './logo.svg';
import './App.css';

import Card from './card/card';
import Img from './img/img';
import Descr from './description/descr';
import Button from './button/button';

import pathImg from './static/images/4157424.jpg';

function App() {
  return (
      <div className='page-wrapper'>
        <Card>

          <Img img={pathImg}/>

          <Descr children={
            <>
              <h2>Заголовок</h2>
              <div>
                  <p>Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст</p>
              </div>

              <Button text="Go somewhere" />
            </>
          } />

        </Card>
      </div>
      

  );
}

export default App;
