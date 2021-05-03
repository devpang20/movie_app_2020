import React from "react";

class Detail extends React.Component {
    compoentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefind) {
            history.push("/");
        }
    }

    render() {
        const { location } = this.props;
        if(location.state) {
            return <span>{location.state.title}</span>
        } else {
            return null;
        }
    }

}

function Detail(props) {
    return <span>test</span>
}

export default Detail;