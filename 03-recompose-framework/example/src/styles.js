const green = 'rgb(0, 200, 150)';

export default {
  container: {
    
  },
  list: {
    margin: 0
  },
  searchBox: {
    width: 400,
    overflow: 'hidden'
  },
  searchInput: {
    float: 'left',
    width: 'calc(100% - 50px)',
    border: '2px solid rgb(0, 200, 150)',
    borderRight: 'none',
    height: 50,
    fontSize: 25,
    padding: 10
  },
  searchButton: {
    background: `url(https://goo.gl/I4wh17) ${green} 0 0 / contain no-repeat`,
    border: 'none',
    height: 50,
    width: 50,
    float: 'right'
  }
};