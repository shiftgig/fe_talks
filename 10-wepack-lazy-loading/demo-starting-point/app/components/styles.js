const contentWidth = '900px'

export default {
  wrapper: {
    fontFamily: 'sans-serif',
  },
  title: {
    textAlign: 'center'
  },
  nav: {
    display: 'block',
    backgroundColor: '#e5e5e5',
    overflow: 'hidden'
  },
  navList: {
    overflow: 'hidden',
    listStyle: 'none',
    padding: '0',
    margin: 'auto',
    width: contentWidth
  },
  navItem: {
    float: 'left',
    padding: '10px 15px',
    cursor: 'pointer'
  },
  content: {
    width: contentWidth,
    margin: 'auto',
    overflow: 'hidden',
    paddingTop: '20px',
  }
}