import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourceService {

  constructor() { }

  public cource: {
    name: string;
    sinopsis: string;
    author: string;    
    }[] = [
      {
        name:"Cource 1",
        sinopsis:"Imperdiet sed sapien amet, elit. Ornare pellentesque integer ornare ornare dictum vel efficitur urna sodales vitae sodales dictum. Lorem dictum ipsum pellentesque orci, molestie in id id in consectetur quis, dictumst. Lorem sed vitae ultricies. Et molestie pellentesque tortor, odio. Id justo dictum arcu aenean dictum non ornare pulvinar efficitur dictum non vel ultricies. Vel morbi dapibus est. Faucibus. In in vulputate luctus augue et quam, lorem nunc tempus risus lacinia sed justo in ut. Accumsan consectetur sodales venenatis cursus vel mollis orci, dictumst. Vulputate odio. Sodales nec vulputate amet, molestie risus id nulla ornare pellentesque vitae morbi libero, i.",
        author:"Tesla",
      },
      {
        name:"Cource 2",
        sinopsis:"Eget morbi dapibus pellentesque accumsan sed odio. Quis, in consectetur molestie quam, molestie amet, vestibulum velit accumsan risus elit. Dictum. Et quis, amet, platea non sit vulputate ut. Mauris ornare nisi ornare in justo faucibus. Aenean sit sit non adipiscing sit mattis consectetur augue odio. Ornare dictum hac in quam, vulputate et dolor cursus in venenatis non malesuada amet, eleifend sit nec amet augue elit. Nec leo, ex. Sed quam, faucibus. Amet, lectus consectetur dui risus risus non augue libero, eleifend in vulputate dapibus morbi mattis id molestie urna ornare aenean consectetur amet, cras platea malesuada lectus efficitur nunc ame.",
        author:"Tesla",
      },
      {
        name:"Cource 2",
        sinopsis:"Eget morbi dapibus pellentesque accumsan sed odio. Quis, in consectetur molestie quam, molestie amet, vestibulum velit accumsan risus elit. Dictum. Et quis, amet, platea non sit vulputate ut. Mauris ornare nisi ornare in justo faucibus. Aenean sit sit non adipiscing sit mattis consectetur augue odio. Ornare dictum hac in quam, vulputate et dolor cursus in venenatis non malesuada amet, eleifend sit nec amet augue elit. Nec leo, ex. Sed quam, faucibus. Amet, lectus consectetur dui risus risus non augue libero, eleifend in vulputate dapibus morbi mattis id molestie urna ornare aenean consectetur amet, cras platea malesuada lectus efficitur nunc ame.",
        author:"Tesla",
      }
  ]

  getAll(){
    return this.cource;
  }

}