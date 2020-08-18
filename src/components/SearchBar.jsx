import React from 'react'
import { connect } from 'react-redux'
import  changeFilterByName  from './actions/actionsFilter';

function filterForm() {
  return (
    <div>
      <select data-testid='column-filter' placeholder="SELECT">
{/*         <option value="">Coluna</option>
 */}        <option value='population'>Population</option>
        <option value="orbital_period">Orbital Period</option>
        <option value="diameter">Diameter</option>
        <option value="rotation_period">Rotation Period</option>
        <option value="surface_water">Surface Water</option>
      </select>
      <select data-testid='comparison-filter'>
{/*         <option value="">Comparação</option>
 */}        <option value="maior_que">Maior que:</option>
        <option value="menor_que">Menor que:</option>
        <option value="igual_a">Igual a:</option>
      </select>
      <input type="number" data-testid='value-filter'/>
      <button type="button" data-testid='button-filter'>Acionar Filtro</button>
    </div>
  )
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { changeFilterByName } = this.props
    this.setState({
      inputText: event.target.value
    })
    changeFilterByName(event.target.value);
  }

  render() {
    const { inputText } = this.state;
    return (
      <div>
        <form>
          <label>Procurar</label>
          <input 
          placeholder="Name"
          onChange={this.handleChange}
          value={inputText}
          data-testid='name-filter'
          />
        </form>
        {filterForm()}
      </div>        
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeFilterByName: (nameInput) => dispatch(changeFilterByName(nameInput)),
});

export default connect(null, mapDispatchToProps)(SearchBar);