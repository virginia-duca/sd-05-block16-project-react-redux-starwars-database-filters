import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilterByName, changeFilterByNumeric } from './actions/actionsFilter';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      column: '',
      comparison: '',
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectColumn = this.handleSelectColumn.bind(this);
    this.handleSelectComparison = this.handleSelectComparison.bind(this);
    this.handleNumericValue = this.handleNumericValue.bind(this);
    this.submitToStore = this.submitToStore.bind(this);
    this.selectParameter = this.selectParameter.bind(this);
  }

  selectParameter() {
    return (
      <select
        data-testid="column-filter"
        onChange={this.handleSelectColumn}
      >
        <option>select</option>
        <option value="population" id="population">population</option>
        <option value="orbital_period"id="orbital_period">orbital_period</option>
        <option value="diameter" id="diameter">diameter</option>
        <option value="rotation_period" id="rotation_period">rotation_period</option>
        <option value="surface_water" id="surface_water">surface_water</option>
      </select>
    );
  }

  filterForm() {
    const { value } = this.state;
    return (
      <div>
        {this.selectParameter()}
        <select data-testid="comparison-filter" onChange={this.handleSelectComparison}>
          <option>select</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          value={value}
          onChange={this.handleNumericValue}
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={this.submitToStore}
        >
          Acionar Filtro
        </button>
      </div>
    );
  }

  handleSelectColumn(event) {
    this.setState({
      column: event.target.value,
    });
  }

  handleSelectComparison(event) {
    this.setState({
      comparison: event.target.value,
    });
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value,
    });
    this.props.changeFilterByName(event.target.value);
  }

  handleNumericValue(event) {
    this.setState({ value: event.target.value });
  }

  submitToStore() {
    const { column, comparison, value } = this.state;
    this.props.changeFilterByNumeric(column, comparison, value);
  }

  render() {
    const { inputText } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="name-filter">Procurar</label>
          <input
            placeholder="Name"
            onChange={this.handleChange}
            value={inputText}
            data-testid="name-filter"
          />
        </form>
        {this.filterForm()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  changeFilterByName: (nameInput) => dispatch(changeFilterByName(nameInput)),
  changeFilterByNumeric: (column, comparison, value) => (
    dispatch(changeFilterByNumeric(column, comparison, value))
  ),
});

SearchBar.propTypes = {
  changeFilterByName: PropTypes.instanceOf(Object).isRequired,
  changeFilterByNumeric: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
