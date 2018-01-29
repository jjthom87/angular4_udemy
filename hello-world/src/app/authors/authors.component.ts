import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  ngOnInit() {
  }

  onSave($event){
    console.log($event);
    $event.stopPropagation();
    this.isActive = true;
  }

  onKeyUp($event){
    var str = "";
    str += $event.target.value
    this.keyUpText = str;
  }

  onKeyUpEnter($event){
    this.keyUpEnterText = $event.target.value
  }

  onEnterThis(whatever){
    this.enterThisText = whatever
  }

  enterThisText = undefined
  keyUpEnterText = undefined
  keyUpText = ''
  isActive = false;
  colSpan = 2
  title = "3 Authors"
  authors;
  image_url="https://www.thenation.com/wp-content/uploads/2017/09/vonnegut-SevenStoriesPress_img.jpg"

	constructor(service: AuthorsService){
		this.authors = service.getAuthors();
	}

}
