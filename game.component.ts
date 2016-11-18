import {Component, Input, AfterViewInit, ElementRef} from '@angular/core';

import {Game} from '../../model/game';
declare var jQuery: any;
@Component({
  selector: 'my-game',
  templateUrl: './game.component.html'
 })

export class GamesComponent implements AfterViewInit {
    @Input() gamedata: Game;
    constructor(private el: ElementRef) {
    }
    ngAfterViewInit() {
        // console.log('gamedata called', this.gamedata.gameUrlName);
        let nativeEl = this.el.nativeElement;
        let imgHide = jQuery(nativeEl).find('.img-info');
        imgHide.hide();
    }
    ImgOnClick(imgInfo) {
         jQuery(imgInfo).fadeIn(500).delay(2000).fadeOut('slow');
    }
}
