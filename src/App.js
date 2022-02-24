import './App.css';
import Cell from './Cell';

function App() {
  return (
      <div className="new_span">
      <div class="row">
          <h1 class="span3">Tic Tac Toe</h1>
          <div class="span3">
              <div class="input-prepend input-append">
                  <span class="add-on win_text">O won</span><strong id="o_win"
                      class="win_times add-on">0</strong><span class="add-on">time(s)</span>
              </div>
              <div class="input-prepend input-append">
                  <span class="add-on win_text">X won</span><strong id="x_win"
                      class="win_times add-on">0</strong><span class="add-on">time(s)</span>
              </div>

          </div>

      </div>

        <ul class="row" id="game">
          <Cell id="one">+</Cell>
          <Cell id="two">+</Cell>
          <Cell id="three">+</Cell>
          <Cell id="four">+</Cell>
          <Cell id="five">+</Cell>
          <Cell id="six">+</Cell>
          <Cell id="seven">+</Cell>
          <Cell id="eight">+</Cell>
          <Cell id="nine">+</Cell>
        </ul>
        
        <div class="clr">&nbsp;</div>
        <div class="row"><a href="#" id="reset" class="btn-success btn span3">Restart</a></div>
      </div>
  );
}

export default App;
