import React from 'react'

class DDlogin extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            url: "https://login.dingtalk.com/login/qrcode.htm?goto="
        }
    }
    createSrc = () => {
        const { goto, style, href} = this.props.options
        let src = this.state.url + encodeURIComponent(goto)
        src += style ? "&style=" + style : "";
        src += href ? "&href=" + href : "";
        return src
    }
    render(){
        const iframeOption = {
            id: this.props.options.id,
            src: this.createSrc(),
            frameBorder: "0",
            allowTransparency : "true",
            scrolling: "no",
            width: "365px",
            height: "400px"
        }
        return (
            <iframe {...iframeOption} />
        )
    }
}

DDlogin.propTypes = {
    options: React.PropTypes.shape({
        id: React.PropTypes.string,
        goto: React.PropTypes.string.isRequired,
        style: React.PropTypes.string,
        href: React.PropTypes.string,
        width: React.PropTypes.string,
        height: React.PropTypes.string
    })
}

DDlogin.defaultProps={
    id: "login_container",
    goto: "",
    style: "",
    href: "",
    width: "300px",
    height: "300px"
}

export default DDlogin
