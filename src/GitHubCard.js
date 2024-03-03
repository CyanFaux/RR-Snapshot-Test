import React from "react";
import renderer from "react-test-renderer";

function GitHubCard() {
    return (
        <div>
            <h1>CyanFaux</h1>
            <img src="photo_of_me.jpg" alt="Photo of Me"/>
            <p>blurb about me</p>
        </div>
    )
}

test("renders a snapshot", () => {
    const tree = renderer.create(<GitHubCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });

export default GitHubCard