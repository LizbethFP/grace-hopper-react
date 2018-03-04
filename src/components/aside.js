import React, { Component } from 'react';
import './css/aside.css';
import graceHopper from './images/grace-hopper.jpg';
import usaFlag from './images/usa-flag.svg';

class Aside extends Component {
  render() {
    return (
      <aside className="summary">
        <table className="summary-table">
          <thead>
            <tr>
              <th colspan="2">Grace Murray Hopper</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="2">
                <img src={graceHopper} alt="Grace Hopper Picture"></img>
                  <p>Rear Admiral Grace M. Hopper, 1984</p>
                  <hr></hr>
              </td>
            </tr>
                <tr>
                  <th>Nickname</th>
                  <td>"Amazing Grace"</td>
                </tr>
                <tr>
                  <th>Born</th>
                  <td>December 9, 1906</td>
                </tr>
                <tr>
                  <th>Died</th>
                  <td>January 1, 1992 (aged 85)</td>
                </tr>
                <tr>
                  <th>Allegiance</th>
                  <td>
                    <img src={usaFlag} alt="US flag"></img>
                  </td>
                </tr>

        </tbody>
      </table>
    </aside>
    );
  }
}

export default Aside;