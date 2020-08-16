import React from 'react';
import { connect } from 'react-redux';

class TableData extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <tbody>
        {data.map((planet) => (
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
        ))}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.dataReducer.data,
});

export default connect(mapStateToProps)(TableData);
