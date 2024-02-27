import { Component } from "react";
import Lottie from "react-lottie";
import data from "../../assets/preloader.json";
import "./Prealoader.scss";
interface LottieControlState {
  isStopped: boolean;
  isPaused: boolean;
}

export default class PreLoader extends Component<{}, LottieControlState> {
  constructor(props: {}) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    return (
      <div className="preloader-main-div">
        <Lottie
          options={{
            animationData: data,
            loop: true,
          }}
          height={400}
          width={400}
        />
      </div>
    );
  }
}
