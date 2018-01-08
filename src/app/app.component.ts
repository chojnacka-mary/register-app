import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RegisterApp';

  ngOnInit() {
    $('.autoplay').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false

    });
  }

}
