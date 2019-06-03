import React, { Component } from "react";
import path2regex from "path-to-regexp";
import history from "./history";
const LocationContext = React.createContext({});
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
export class Route extends Component<{
  path: string;
}> {
  render() {
    return (
      <LocationContext.Consumer>
        {(context: any) => {
          const re = path2regex(this.props.path);
          return re.test(context.url) && this.props.children;
        }}
      </LocationContext.Consumer>
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
