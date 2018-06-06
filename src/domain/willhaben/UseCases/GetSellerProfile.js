/* globals fetch */
class GetSellerProfile {
  execute () {
    return fetch('https://api-dev.willhaben.at/restapi/v2/sellerprofile/28797056/5?ds=true')
      .then(res =>
        res.json()
      )
      .catch(error => {
        console.error('error', error)
      })
  }
}

export default GetSellerProfile
