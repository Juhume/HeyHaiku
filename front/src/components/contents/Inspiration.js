import React, { Component } from "react";
import {TwitterTimelineEmbed} from "react-twitter-embed";
import "./Inspiration.css";

export default class Inspiration extends Component {
  render() {
    return (
      <div>
        <div className="twittertext">
          <h1>Never fear the writer's block</h1>
          <h4>
            Here you can find some Twitter accounts for let your imagination fly
            away
          </h4>
        </div>
        <div className="tweet">
          <div className="centerContent">
            <div className="selfCenter standardWidth">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="daily_haiku_"
                options={{ width: 450, height: 750 }}
                transparent	
              />
            </div>
          </div>
          <div className="centerContent">
            <div className="selfCenter standardWidth">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="heyhaikuweb"
                options={{ width: 450, height: 750 }}
                transparent	
              />
            </div>
          </div>
          <div className="centerContent">
            <div className="selfCenter standardWidth">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="doyouhaiku"
                options={{ width: 450, height: 750 }}
                transparent	
              />
            </div>
          </div>
          <div className="centerContent">
            <div className="selfCenter standardWidth">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="accidental575"
                linkColor="#768e87"
                options={{ width: 450, height: 750 }}
                transparent	
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
