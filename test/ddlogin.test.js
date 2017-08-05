import React from 'react'
import DDlogin from '../src/index'
import render from 'react-test-renderer'

test("Render DDlogin", () => {
    const options = {
        id: "login-container",
        goto: "https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=APPID&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=REDIRECT_URI"
    }
    const component = render.create(<DDlogin className="hidden" options={options}/>)
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})