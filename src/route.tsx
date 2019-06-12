import React, { Component } from "react";
import path2regex from "path-to-regexp";
import classnames from "classnames";
import history from "./history";
const LocationContext = React.createContext({
  url: "/",
  navigate: (url: string) => {}
});

export { LocationContext };
export class Link extends Component<{
  href: string;
}> {
  render() {
    return (
      <LocationContext.Consumer>
        {({ url, navigate }: any) => {
          return (
            <div
              onClick={e => {
                navigate(this.props.href);
              }}
            >
              {this.props.children}
            </div>
          );
        }}
      </LocationContext.Consumer>
    );
  }
}
export class Route extends Component<
  {
    path: string;
    children: React.ReactElement;
  },
  {
    stage: string;
  }
> {
  context!: React.ContextType<typeof LocationContext>;
  static contextType = LocationContext;
  constructor(props: any) {
    super(props);
    this.state = {
      stage: "init"
    };
  }
  render() {
    const re = path2regex(this.props.path);

    return (
      re.test(this.context.url) &&
      React.cloneElement(this.props.children)
    );
  }
}
export class Router extends Component<
  any,
  {
    url: string;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      url: window.location.pathname
    };
  }
  navigate = (url: string) => {
    this.setState(
      {
        url
      },
      () => {
        history.push(url);
      }
    );
  };
  componentDidMount() {
    history.push(this.state.url);
  }
  render() {
    return (
      <LocationContext.Provider
        value={{
          url: this.state.url,
          navigate: this.navigate
        }}
      >
        {this.props.children}
      </LocationContext.Provider>
    );
  }
}
