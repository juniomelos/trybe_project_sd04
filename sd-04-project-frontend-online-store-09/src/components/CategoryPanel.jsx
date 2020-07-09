import React, { Component } from 'react';
import * as api from '../services/api';
import '../styles/categoryPanel.css';

class CategoryPanel extends Component {
  constructor(props) {
    super(props);

    this.state = { categoryList: [] };
  }

  componentDidMount() {
    api.getCategories().then((categoryList) => this.setState({ categoryList }));
  }

  render() {
    const { categoryList } = this.state;
    const { setCategory } = this.props;
    return (
      <div className="category-wrap">
        <p className="category-wrap-title">Categorias: </p>
        {categoryList.map((line) => (
          <label key={line.id} htmlFor="input">
            <input
              type="radio"
              name="line"
              value={line.id}
              data-testid="category"
              onChange={(e) => setCategory(e.target.value)}

            />
            {line.name}
            <br />
          </label>
        ))}
      </div>
    );
  }
}

export default CategoryPanel;
