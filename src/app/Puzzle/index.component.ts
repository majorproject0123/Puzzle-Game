import { EventEmitter,Output,Component, OnInit,Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-index',
  styles:[`.description tr td{ border-top:solid 1px black; padding:3px }`],
  templateUrl: './index.component.html'
})
export class IndexComponent  {

  constructor(public elem:ElementRef) { }

  console = console;
  imageSources:any[] = window.location.href.includes("github")?
    [
      "/iceey-puzzle/assets/elephant.jpg",
      "/iceey-puzzle/assets/tiger.jpg",
      "/iceey-puzzle/assets/eagle.jpg"
    ]:
    [
      "/assets/elephant.jpg",
      "/assets/tiger.jpg",
      "/assets/eagle.jpg"
    ];

  settings:any = {
    imgUrl:this.imageSources[0],
    dimension:255,
    level:3,
    delay:0.5
  };
   usage = `use`;
   imgUrlUsage = `Select image`;
   basicDimensionUsage = `Dimensions`;
   puzzleLevelUsage = `No. of rows`;
   delayUsage = `slidetime`;
   puzzleClickUsage = `click`;
  shuffleUsage = `solve`;
   arrangeUsage = `arrange`;
  // imageSources:any[] = [
     //"/iceey-puzzle/assets/elephant.jpg",
     //"/iceey-puzzle/assets/tiger.jpg",
    // "/iceey-puzzle/assets/dolphin.jpg"
  //  ];
  

}
