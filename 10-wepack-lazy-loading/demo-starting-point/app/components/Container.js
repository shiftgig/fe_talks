import React, {Component} from 'react'
import styles from './styles'
import HomeContent from './HomeContent'
import ShopContent from './ShopContent'

class Container extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showShop: false
    }
  }

  showShop = () => this.setState({showShop: !this.state.showShop})

  render = () => {
    return (
      <div style={styles.wrapper}>
        <h1 style={styles.title}>Pretty cool website</h1>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>About</li>
            <li style={styles.navItem}>Contact</li>
            <li style={styles.navItem} onClick={this.showShop}>Shop</li>
          </ul>
        </nav>
        {this.state.showShop ? <ShopContent/> : <HomeContent/>}
      </div>
    )
  }
}

export {Container}