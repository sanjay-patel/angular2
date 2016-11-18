import {Component, ElementRef, AfterViewInit, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {AssetArray} from '../../model/assetArray';
declare var jQuery: any;

@Component({
    selector: 'my-carousel',
    templateUrl: './carousel.component.html'
})

export class CarouselComponent implements AfterViewInit, OnInit {
     public banners: AssetArray[];
     public carData: AssetArray[];

    constructor(private el: ElementRef,  public _dataService: DataService) {
        this.banners = [];
    }

    ngOnInit() {
        let carouselData = this._dataService.getHomePageBanner();
        // console.log('<<this.banners.>>>'); console.log(carouselData);
        for (let i = 0; i < carouselData.length; i++) {
            let tmp: AssetArray;
            tmp = {
                'bannerImage': carouselData[i]['bannerImage'],
                'bigText': carouselData[i]['bigText'],
                'buttonText': carouselData[i]['buttonText'],
                'openGame': carouselData[i]['openGame'],
                'openPage': carouselData[i]['openPage']
            };
            this.banners.push(tmp);
        }
    }
    onSwipe(event) {
        let swipeDirection = event.deltaX > 0 ? 'right' : 'left';
        let nativeEl = this.el.nativeElement;
        let carousel = jQuery(nativeEl).find('.carousel');
        if (swipeDirection === 'left') {
            jQuery(carousel).carousel('next');
        }
        if (swipeDirection === 'right') {
            jQuery(carousel).carousel('prev');
        }
    }
    ngAfterViewInit() {
        let nativeEl = this.el.nativeElement;
        let carousel = jQuery(nativeEl).find('.carousel');
        // console.log(carousel);
        let innerDiv = jQuery(carousel).find('.carousel-inner div');
        if (innerDiv.length > 0) {
            let firstDiv = innerDiv[0];
            jQuery(firstDiv).addClass('active');
        }

        let indicatorsDivs = jQuery(carousel).find('.carousel-indicators li');
        if (indicatorsDivs.length > 0) {
            let firstIndDiv = indicatorsDivs[0];
            jQuery(firstIndDiv).addClass('active');
        }

    }
}
