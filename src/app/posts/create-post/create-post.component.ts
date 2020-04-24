import { Component } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html'
})
export class createpostcomponent {
   lepost= '';

    onajoutpost(comentaire){
    this.lepost=comentaire.value  ;
  }
}
