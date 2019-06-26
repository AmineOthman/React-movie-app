import React, {Component} from 'react';
import './App.css';
import Header from './header.js';
import MoviesList from './List';


const moviesToDisplay = [
  {
    id: 0,
    name: 'Inception',
    image: 'https://is2-ssl.mzstatic.com/image/thumb/Video20/v4/fe/dc/f0/fedcf039-7cc9-89b1-b992-00b0d47a229e/pr_source.lsr/268x0w.png',
    year: '2010',
    rating: 5
  },
  {
    id:1,
    name: 'Shawshank Redemption',
    image:'https://images-na.ssl-images-amazon.com/images/I/519NBNHX5BL._SY445_.jpg',
    year: '1994',
    rating: 4
  },
  {
    id:2,
    name: 'Blade Runner',
    image:'https://images-na.ssl-images-amazon.com/images/I/51caqgbudLL.jpg',
    year: '2017',
    rating: 3
  }
]

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      movies: moviesToDisplay,
      nameFilter: ''
      
    }
  }
  getVisibleMovies() {
    return (
      this.state.movies
    )
  }

  filtername= (keyword) =>{
    let filtred=moviesToDisplay.filter((el,index)=>el.name.toLowerCase().indexOf(keyword)>-1 )
    this.setState({movies:filtred})
  }

  addMovie(newMovie){
    this.setState({
      movies: this.state.movies.concat(newMovie)
    })
  }
  
  render(){
  return (
    <div className="TabContainer">

      <div className="AppContainer">
        
        <div className="Search-bar">
          <Header findName={(x)=>this.filtername(x)}/>   
        </div>
        
        


        <div className="movie-card">
          <MoviesList movies={this.getVisibleMovies()} onAddMovie={(newMovie) => this.addMovie(newMovie)}/>   
        </div>
      
      </div>
      <span class="dot"></span>
    
    </div>
  );
}
}

export default App;
