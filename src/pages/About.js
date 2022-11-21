import React, { Component } from 'react';
import './About.css';

/**
 * Class to handle the rendering of the Home page.
 * @extends React.Component
 */
export default class Home extends Component {
  render() {
    return (
      <div className="About container">
        <h1>About</h1>
        <p>The aim of this study is to develop alternative bacterial diagnostic using anthocyanin (At) extraction from the eggplant (Solanum melongea) peels as a natural pH indicator. Acidified alcoholic method was used to extract the anthocyanin from eggplant peels and conjugated with silver nanoparticle to maintain the color stability. Some bacterial were used: Staphylococcus aureus, Escherichia coli, Pseudomonas aeruginosa, Klebsiella pneumoniae, Bacillus subtilis, and Candida albicans to validate based on ammonia production of each bacteria. The bacterial testing was carried out using anthocyanin liquid test. RGB analysis and Euclidean distance metric were used to quantify the anthocyanin responses toward the ammonia production from each bacterium. Additionally, machine learning application was used to automatically predict the bacteria based on the anthocyanin responses.</p>
      </div>
    );
  }
}
