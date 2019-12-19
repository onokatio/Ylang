import React from "react";

import SampleCodeCard from "./SampleCodeCard.jsx";

export default class SampleCodes extends React.Component {
  render() {
    const CardList = this.props.samples.map((sample, index) => {
      return (
        <div key={index}>
          <SampleCodeCard
            title={sample.title}
            description={sample.description}
            sourcecode={sample.sourcecode}
          />
        </div>
      );
    });

    return <div> {CardList} </div>;
  }
}
