import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Table.css';

function tableBody(planet) {
  return (
    <tr>
      <td>{planet.name}</td>
      <td>{planet.climate}</td>
      <td>{planet.terrain}</td>
      <td>{planet.diameter}</td>
      <td>{planet.gravity}</td>
      <td>{planet.rotation_period}</td>
      <td>{planet.orbital_period}</td>
      <td>{planet.population}</td>
      <td>{planet.surface_water}</td>
      <td>{planet.films}</td>
      <td>{planet.created}</td>
      <td>{planet.edited}</td>
      <td>{planet.url}</td>
    </tr>
  );
}

class TableData extends React.Component {
  render() {
    const { data, name } = this.props;
    if (name !== '') {
      const dataFilteredByName = data.filter((planet) => planet.name.includes(name));
      return (
        <tbody className="table">
          {dataFilteredByName.map((planet) => tableBody(planet))}
        </tbody>
      );
    }
    return (
      <tbody className="table">
        {data.map((planet) => tableBody(planet))}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  name: state.filters.filterByName.name,
});

// Para resolver o problema do codeclimate 'prop-type array is forbiden', utilizei a função InstanceOf que encontrei neste site: https://github.com/yannickcr/eslint-plugin-react/issues/2079

TableData.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  name: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(TableData);
