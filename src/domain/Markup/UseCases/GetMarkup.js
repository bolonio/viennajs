import fakeData from '../../data/data.json';

/* globals fetch */
class GetMarkup {
  execute () {
    return fakeData.elements;
  }
}

export default GetMarkup