import React, { Component } from "react";
import './App.css'
import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorElement from "./routes/ErrorElement";
import News from "./routes/News";
import LoadingBar from 'react-top-loading-bar'

class App extends Component {
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  constructor(props) {
    super(props);
    let country = "in";
    let pageSize = 6;
    let apiKey = import.meta.env.VITE_NEWS_API;
    this.state = { progress: 0 };

    this.router = createHashRouter([
      {
        path: "/",
        element: <Root />,
        errorElement: <ErrorElement />,
        children: [
          {
            path: "/",
            element: <News key={"general"} setProgress={this.setProgress} apiKey={apiKey} country={country} pageSize={pageSize} category={"general"} />,
          },
          {
            path: "/entertainment",
            element: <News key={"entertainment"} setProgress={this.setProgress} apiKey={apiKey} country={country} pageSize={pageSize} category={"entertainment"} />,
          },
          {
            path: "/health",
            element: <News key={"health"} setProgress={this.setProgress} apiKey={apiKey} country={country} pageSize={pageSize} category={"health"} />,
          },
          {
            path: "/science",
            element: <News key={"science"} setProgress={this.setProgress} apiKey={apiKey} country={country} pageSize={pageSize} category={"science"} />,
          },
          {
            path: "/sports",
            element: <News key={"sports"} setProgress={this.setProgress} apiKey={apiKey} country={country} pageSize={pageSize} category={"sports"} />,
          },
          {
            path: "/technology",
            element: <News key={"technology"} setProgress={this.setProgress} apiKey={apiKey} country={country} pageSize={pageSize} category={"technology"} />,
          },
          {
            path: "/business",
            element: <News key={"business"} setProgress={this.setProgress} apiKey={apiKey} country={country} pageSize={pageSize} category={"business"} />,
          },
        ],
      },
    ]);
  }

  render() {
    return (
      <React.StrictMode>
        <RouterProvider router={this.router} />
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
        />
      </React.StrictMode>
    );
  }
}

export default App;
