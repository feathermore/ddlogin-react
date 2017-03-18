# ddlogin-react
ddlogin for react

## Installtion
```
$ npm install ddlogin-react --save
```
## Example Usage
```
import React from 'react'
import DDlogin from 'ddlogin-react'

export defalut class Login extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
         const options = {
            id: "login-container",
            goto: "https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=APPID&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=REDIRECT_URI"
        }
        return (
            <div id="login">
                <h2>扫描登录</h2>
                <DDlogin options="options"/>
            </div>
        )
    }
}

```

## Other

See more detail from [Dingtalk Development Site](https://open-doc.dingtalk.com/docs/doc.htm?spm=a219a.7629140.0.0.UvUAFG&treeId=168&articleId=104882&docType=1)

## Licence
MIT License