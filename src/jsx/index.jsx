import React from 'react';
import ReactDOM from 'react-dom';

import SearchForm from './search-form';
import SearchResults from './search-results';


require('../scss/styles.scss'); // note: you could make component-specific
                                // SCSS here, but just focusing on the
                                // JavaScript due to time

var data = {"page":1,"results":[{"poster_path":"\/gj282Pniaa78ZJfbaixyLXnXEDI.jpg","adult":false,"overview":"Katniss Everdeen reluctantly becomes the symbol of a mass rebellion against the autocratic Capitol.","release_date":"2014-11-18","genre_ids":[878,12,53],"id":131631,"original_title":"The Hunger Games: Mockingjay - Part 1","original_language":"en","title":"The Hunger Games: Mockingjay - Part 1","backdrop_path":"\/83nHcz2KcnEpPXY50Ky2VldewJJ.jpg","popularity":12.468482,"vote_count":3030,"video":false,"vote_average":6.73},{"poster_path":"\/Hn0KgefVEp0GkdTexS6gfKTMfi.jpg","adult":false,"overview":"Katniss Everdeen has returned home safe after winning the 74th Annual Hunger Games along with fellow tribute Peeta Mellark. Winning means that they must turn around and leave their family and close friends, embarking on a \"Victor's Tour\" of the districts. Along the way Katniss senses that a rebellion is simmering, but the Capitol is still very much in control as President Snow prepares the 75th Annual Hunger Games (The Quarter Quell) - a competition that could change Panem forever.","release_date":"2013-11-15","genre_ids":[878,53,28,12],"id":101299,"original_title":"The Hunger Games: Catching Fire","original_language":"en","title":"The Hunger Games: Catching Fire","backdrop_path":"\/wRCPG1lsgfTFkWJ7G3eWgxCgv0C.jpg","popularity":6.450362,"vote_count":3698,"video":false,"vote_average":7.44},{"poster_path":"\/iLJdwmzrHFjFwI5lvYAT1gcpRuA.jpg","adult":false,"overview":"Every year in the ruins of what was once North America, the nation of Panem forces each of its twelve districts to send a teenage boy and girl to compete in the Hunger Games.  Part twisted entertainment, part government intimidation tactic, the Hunger Games are a nationally televised event in which “Tributes” must fight with one another until one survivor remains.  Pitted against highly-trained Tributes who have prepared for these Games their entire lives, Katniss is forced to rely upon her sharp instincts as well as the mentorship of drunken former victor Haymitch Abernathy.  If she’s ever to return home to District 12, Katniss must make impossible choices in the arena that weigh survival against humanity and life against love. The world will be watching.","release_date":"2012-03-12","genre_ids":[878,12,14],"id":70160,"original_title":"The Hunger Games","original_language":"en","title":"The Hunger Games","backdrop_path":"\/1LTLrl06uII4w2BTpnQnmWwrKi.jpg","popularity":3.215395,"vote_count":6586,"video":false,"vote_average":6.69},{"poster_path":"\/w93GAiq860UjmgR6tU9h2T24vaV.jpg","adult":false,"overview":"With the nation of Panem in a full scale war, Katniss confronts President Snow in the final showdown. Teamed with a group of her closest friends – including Gale, Finnick, and Peeta – Katniss goes off on a mission with the unit from District 13 as they risk their lives to stage an assassination attempt on President Snow who has become increasingly obsessed with destroying her. The mortal traps, enemies, and moral choices that await Katniss will challenge her more than any arena she faced in The Hunger Games.","release_date":"2015-11-18","genre_ids":[10752,12,878],"id":131634,"original_title":"The Hunger Games: Mockingjay - Part 2","original_language":"en","title":"The Hunger Games: Mockingjay - Part 2","backdrop_path":"\/qjn3fzCAHGfl0CzeUlFbjrsmu4c.jpg","popularity":5.943944,"vote_count":1914,"video":false,"vote_average":6.58},{"poster_path":null,"adult":false,"overview":"Two and twenty minute documentary about the making of The Hunger Games: Mockingjay, Part 2.","release_date":"","genre_ids":[],"id":392840,"original_title":"Pawns, No More: The Making of The Hunger Games: Mockingjay, Part 2","original_language":"en","title":"Pawns, No More: The Making of The Hunger Games: Mockingjay, Part 2","backdrop_path":null,"popularity":1.000123,"vote_count":0,"video":false,"vote_average":0}],"total_results":5,"total_pages":1};

const API_KEY = '42b3e60b6636f50062f6d3579100d83f';

var MovieSearch = React.createClass({
  getInitialState: function() {
    return {
      searchTerm: '',
      searchResults: [],
      totalResults: 0
    };
  },
  handleSearchInput: function(searchTerm) {
    this.setState({
      searchTerm: searchTerm
    });
  },
  handleSearchSubmit: function(e) {
    e.preventDefault(); // prevent form submission

    // only search if there is a search term
    if (this.state.searchTerm !== '') {
      // use new Fetch API
      fetch('http://api.themoviedb.org/3/search/movie?api_key=' + API_KEY + '&query=' + this.state.searchTerm).then(function(response) {
        return response.json();
      }).then(function(response) {
        if (response.total_results > 0) {
          this.setState({ totalResults: response.total_results });
          this.setState({ searchResults: response.results });
        }
      }.bind(this));
    }
  },
  render: function() {
    return (
      <div>
        <h1>Movie Search</h1>
        <SearchForm searchTerm={this.state.searchTerm} onSearchInput={this.handleSearchInput} onSearchSubmit={this.handleSearchSubmit} />
        <SearchResults results={this.state.searchResults} totalResults={this.state.totalResults} />
      </div>
    );
  }
});


ReactDOM.render(
    <MovieSearch />,
    document.getElementById('content')
);
