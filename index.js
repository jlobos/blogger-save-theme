const fetch = require('node-fetch')
const qs = require('qs')

module.exports = ({
  blogID,
  authuser = 0,
  theme,
  xGWTPermutation,
  xsrf,
  cookie: {
    HSID,
    SID,
    SSID
  }
}) => {
  return fetch(
    `https://www.blogger.com/blogger_rpc?blogID=${blogID}&authuser=${authuser}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-GWT-Permutation': xGWTPermutation,
        cookie: qs.stringify({HSID, SID, SSID}, {delimiter: ';'})
      },
      body: JSON.stringify({
        method: 'saveLayoutTemplateData',
        params: JSON.stringify({1: theme}),
        xsrf
      })
    }
  ).then(res => res.json())
}
