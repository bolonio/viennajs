import GetMarkupUseCase from './Markup/UseCases/GetMarkup'

const useCases = {
  getMarkup: GetMarkupUseCase
}

class Markup {
  get (key) {
    return new useCases[key]()
  }
}

export default Markup
