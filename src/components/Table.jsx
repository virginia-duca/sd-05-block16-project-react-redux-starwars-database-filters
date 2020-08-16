import React from 'react';
import { connect } from 'react-redux';
import { fetchPlanets } from './actions/actions';
import TableData from './TableData';

class Table extends React.Component {

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    return (
      <div>
        <div>StarWars Datatable with Filters</div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Climate</th>
              <th>Terrain</th>
              <th>Diameter</th>
              <th>Gravity</th>
              <th>Rotation Period</th>
              <th>Orbital Period</th>
              <th>Population</th>
              <th>Surface Water</th>
              <th>Films</th>
              <th>Created</th>
              <th>Edited</th>
              <th>url</th>
            </tr>
          </thead>
          <TableData />
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchPlanets()),
});

export default connect(null, mapDispatchToProps)(Table);
