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
              <th colspan="2" className="text-center p-3">Grace Murray Hopper</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="2" className="px-2">
                <img src={graceHopper} alt="Grace Hopper Picture"></img>
                  <p className="text-center mt-2">Rear Admiral Grace M. Hopper, 1984</p>
                  <hr></hr>
              </td>
            </tr>
            <tr>
              <th className="pl-4 text-content">Nickname</th>
              <td className="text-content">"Amazing Grace"</td>
            </tr>
            <tr>
              <th className="pl-4 text-content">Born</th>
              <td className="text-content">December 9, 1906</td>
            </tr>
            <tr>
              <th className="pl-4 text-content">Died</th>
              <td className="text-content">January 1, 1992 (aged 85)</td>
            </tr>
            <tr>
              <th className="pl-4 text-content">Allegiance</th>
              <td className="text-content">
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