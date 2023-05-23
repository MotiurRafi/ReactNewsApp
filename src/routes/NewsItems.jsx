import React, { Component } from "react";

export default class NewsItems extends Component {
  constructor() {
    super();
    this.state = {
      articles: [
        {
          source: { id: null, name: "San Francisco Chronicle" },
          author: "Roland Li",
          title:
            "S.F. opening Twitter investigation after ex-workers sue Elon Musk - San Francisco Chronicle",
          description:
            "San Francisco officials are opening up a new investigation aimed at Twitter's Mid-Market headquarters after an explosive lawsuit.",
          url: "https://www.sfchronicle.com/bayarea/article/s-f-opening-new-twitter-investigation-ex-workers-18107633.php",
          urlToImage:
            "https://s.hdnux.com/photos/01/32/74/72/23842481/3/rawImage.jpg",
          publishedAt: "2023-05-19T02:18:16Z",
          content:
            "San Francisco officials are opening a new investigation aimed at Twitters Mid-Market headquarters after an explosive lawsuit from former senior employees alleged numerous instances where members of o… [+3921 chars]",
        },
        {
          source: { id: null, name: "New York Post" },
          author: "Emily Lefroy",
          title:
            "Record number of workers test positive for marijuana: study - New York Post ",
          description:
            "Dr. Suhash Harwani, senior director of science for employer solutions at Quest Diagnostics, noted the correlation between positivity rates and states that have legalized marijuana.",
          url: "https://nypost.com/2023/05/18/record-number-of-workers-test-positive-for-marijuana-study/",
          urlToImage:
            "https://nypost.com/wp-content/uploads/sites/2/2023/05/NYPICHPDPICT000011329344.jpg?quality=75&strip=all&w=1024",
          publishedAt: "2023-05-19T01:26:00Z",
          content:
            "9 to 5? More like 9 to 4:20.\r\nMarijuana use among US workers reached “historic” highs in 2022, according to study findings released Thursday by Quest Diagnostics.\r\nThe lab company analyzed over 6 mil… [+2467 chars]",
        },
        {
          source: { id: null, name: "CNBC" },
          author: "Lora Kolodny, Jordan Novet",
          title:
            "Read the letter: Twitter accuses Microsoft of using its data in unauthorized ways - CNBC",
          description:
            "Twitter wrote a letter to Microsoft on Thursday, claiming the software company is using its data in unauthorized ways.",
          url: "https://www.cnbc.com/2023/05/18/twitter-accuses-microsoft-of-using-data-in-unauthorized-ways.html",
          urlToImage:
            "https://image.cnbcfm.com/api/v1/image/107242462-1684323623663-1U8A8319.JPG?v=1684459155&w=1920&h=1080",
          publishedAt: "2023-05-19T01:19:00Z",
          content:
            "Twitter is accusing Microsoft of using the social media company's data in ways that were unauthorized and never disclosed.\r\nAlex Spiro, a partner at Quinn Emanuel Urquhart &amp; Sullivan and attorney… [+3227 chars]",
        },
        {
          source: { id: null, name: "CNBC" },
          author: "Jihye Lee, Lim Hui Jie",
          title:
            "Asia markets rise after S&P 500, Nasdaq mark highest close since August - CNBC",
          description:
            "The S&P 500 and Nasdaq Composite jumped on Thursday to their highest closing levels since August 2022.",
          url: "https://www.cnbc.com/2023/05/19/asia-markets.html",
          urlToImage:
            "https://image.cnbcfm.com/api/v1/image/107232467-1682640837861-gettyimages-1248845339-AFP_33BN98L.jpeg?v=1684453524&w=1920&h=1080",
          publishedAt: "2023-05-19T00:18:00Z",
          content:
            "Initial jobless claims unexpectedly declined last week, indicating the labor market still has some tightness.\r\nFirst-time filings for the week ended May 13 totaled 242,000, a drop of 22,000 from the … [+550 chars]",
        },
        {
          source: { id: null, name: "Car and Driver" },
          author: null,
          title:
            "View Exterior Photos of the 2024 Toyota Tacoma - Car and Driver",
          description: "See the all-new mid-size pickup from every angle.",
          url: "https://www.caranddriver.com/photos/g43907615/2024-toyota-tacoma-exterior-gallery/",
          urlToImage:
            "https://hips.hearstapps.com/hmg-prod/images/2024-toyota-tacoma-lineup-101-6463c7655b981.jpg?crop=0.383xw:0.331xh;0.326xw,0.371xh&resize=1200:*",
          publishedAt: "2023-05-19T00:05:08Z",
          content:
            "The TRD Sport continues the winning formula of sport-tuned shocks, pavement-oriented tires, and hood scoop. The TRD Off-Road adds 33-inch tires, Bilstein remote reservoir shocks, and a slight nose li… [+2 chars]",
        },
      ],
    };
  }
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center">
          <div className="card" style={{height:"37rem"}}>
            <img src={this.props.imageurl ? this.props.imageurl:"https://media.cnn.com/api/v1/images/stellar/prod/230520052452-02-zelensky-hiroshima-arrival-052023.jpg"} className="card-img-top" alt="..." style={{height: "21rem"}}/>
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.description}</p>
              <p className="card-text"><small className="text-body-secondary">By {!(this.props.author)?"Unknown":this.props.author} on {new Date(this.props.publishedAt).toGMTString()}</small></p>
              <a href={this.props.newsUrl} className="btn btn-dark">
                Read More
              </a>
            </div>
            <span className="source_Item">{this.props.source?this.props.source:"Unknown"}</span>
          </div>
        </div>
    );
  }
}
