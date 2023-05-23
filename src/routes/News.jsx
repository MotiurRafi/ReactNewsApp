import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalResults : "",
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsStorm `
  }
  capitalizeFirstLetter =(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  async componentDidMount() {
    this.props.setProgress(0)
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let Data = await fetch(url);
    let parseData = await Data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles, totalResults: parseData.totalResults 
    });
    this.props.setProgress(100)
  }
  
  previousClick = async () => {
    if(!(this.state.page<=1)){
      this.props.setProgress(0)
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      let Data = await fetch(url);
        let parseData = await Data.json();
        console.log(parseData);
        this.setState({
          articles: parseData.articles,
          page: this.state.page - 1,
        });
        this.props.setProgress(100)
      }
    };
    nextClick = async () => {
      if ((this.state.page + 1) <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
        this.props.setProgress(0)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let response = await fetch(url);
        let parseData = await response.json();
        console.log(parseData);
        this.setState({
          articles: parseData.articles,
          page: this.state.page + 1,
        });
        this.props.setProgress(100)
    }
  };
  

  render() {
    return (
      <div className="News_container mx-5">
        <h1 className="text-center my-3">News Storm - {`${this.capitalizeFirstLetter(this.props.category)} TopHeadlines`}</h1>
        <div className="newsGridBox">
          {this.state.articles.map((element) => {
            return (
              <NewsItems
                title={element.title}
                description={element.description}
                imageurl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                publishedAt={element.publishedAt}
                source={element.source.name}
              />
            );
          })}
        </div>
        <div className="d-flex justify-content-between my-3">
          <button
            disabled={this.state.page<=1}
            type="button"
            className="btn btn-dark"
            onClick={this.previousClick}
          >
            &larr; Previous
          </button>
          <button
          disabled={!((this.state.page + 1) <= Math.ceil(this.state.totalResults / this.props.pageSize))}
            type="button"
            className="btn btn-dark"
            onClick={this.nextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
