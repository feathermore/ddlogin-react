# ddlogin-react
ddlogin for react

## Installation
```sh
$ npm install ddlogin-react --save
```
## Example Usage
```js
import React from 'react'
import DDlogin from 'ddlogin-react'

export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            // 测试 appid
            APPID: 'dingoatk9pnaxugtzngq9l',
            // 跳转当前页面
            REDIRECT_URI:  window.location.href
        }
    }
    componentWillMount() { 
        // 触发回调时处理回调链接,举例：如果查询字符串中含有state,且为dinglogin（可自行设置）,
        // 则触发扫描登录的相应处理方法，比如登录。
        const state = this.props.location && this.props.location.query.state;
        if(state === 'dinglogin') {
            const code = this.props.location.query.code;
            // todo....
            // ex: dispatch(scanLogin({tmp_auth_code: code}));
        }
    }
    componentDidMount () {
        // 监听消息处理方法
        const handleMessage = (event) => {
            // 获取loginTempCode
            const loginTempCode = event.data;
            // 获取消息来源
            const origin = event.origin;
            // 拼接 url
            const url = `https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=${this.state.APPID}&response_type=code&scope=snsapi_login&state=dinglogin&redirect_uri=${this.state.REDIRECT_URI}&loginTmpCode=${loginTempCode}`
            // 如果来源为https://login.dingtalk.com，则在当前窗口打开回调链接
            if (origin === 'https://login.dingtalk.com') {
                window.open(encodeURI(url), '_parent')
            }
        };
        // 监听iframe的消息
        if (typeof window.addEventListener != 'undefined') {
            window.addEventListener('message', handleMessage, false);
        } else if (typeof window.attachEvent != 'undefined') {
            window.attachEvent('onmessage', handleMessage);
        }
    }
    render(){
         const options = {
            id: "login-container",
            goto: "https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=APPID&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=REDIRECT_URI",
            width: '350px',
            height: '350px'
        }
        return (
            <div id="login">
                <h2>扫描登录</h2>
                <DDlogin options={options}/>
            </div>
        )
    }
}

```

## Other

See more detail from [Dingtalk Development Site](https://open-doc.dingtalk.com/docs/doc.htm?spm=a219a.7629140.0.0.UvUAFG&treeId=168&articleId=104882&docType=1)

## Licence
MIT License