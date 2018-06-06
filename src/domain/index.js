import GetSellerProfile from './Willhaben/UseCases/GetSellerProfile'

const useCases = {
  getSellerProfile: GetSellerProfile
}

class Willhaben {
  get (key) {
    return new useCases[key]()
  }
}

export default Willhaben
