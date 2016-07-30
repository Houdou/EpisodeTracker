import { Component, Input } from '@angular/core';

import { Bangumi } from '../../shared/bangumi/bangumi';

@Component({
	selector: 'epi-anime-bangumi',
	template: `
		<GridLayout rows="29, 1, 60" columns="90, 10, *" cssClass="bangumi-item">
			<Image row="0" rowSpan="3" col="0"
				horizontalAlignment="center" verticalAlignment="center"
				src="~/images/{{bangumi.thumbnail}}" cssClass="anime-bangumi-thumbnail">
			</Image>
      <Image row="0" rowSpan="3" col="1" src="~/img/barc.png"></Image>
			<Label row="0" col="2" text="{{bangumi.title}}" cssClass="anime-bangumi-title"></Label>
      <Label row="1" col="2" backgroundColor="#DDDDDD"></Label>
      
			<GridLayout row="2" col="2" rows="27, 33" columns="67, 10, 67, 10, *">
				<Label row="0" col="0"
					horizontalAlignment="left"
					text="开播" cssClass="anime-bangumi-data-name"></Label>
				<Label row="1" col="0"
					horizontalAlignment="center"
					text="12.10" cssClass="anime-bangumi-data-small"></Label>

        <Image row="0" rowSpan="2" col="1" src="~/img/barm.png"
          verticalAlignment="scretch"></Image>

        <Label row="0" col="2" 
					horizontalAlignment="left"
					text="每周" cssClass="anime-bangumi-data-name"></Label>
        <Label row="1" col="2"
					horizontalAlignment="center"
					text="三" cssClass="anime-bangumi-data-small"></Label>
          
        <Image row="0" rowSpan="2" col="3" src="~/img/bary.png"
          verticalAlignment="scretch"></Image>

        <GridLayout row="0" rowSpan="2" col="4" rows="*" columns="*, auto"
          horizontalAlignment="right">
            <Label row="0" col="0" 
              horizontalAlignment="right"
              text="121" cssClass="anime-bangumi-data-following"></Label>
            <Label row="0" col="1"
              horizontalAlignment="right"
              text="人在追" cssClass="anime-bangumi-data-following-surfix"></Label>
        </GridLayout>
			</GridLayout>
		</GridLayout>
	`,
	styles: [`
		.bangumi-item > * {
			color: #444;
		}
		.anime-bangumi-thumbnail {
			
		}
    .anime-bangumi-title {

    }
    .anime-bangumi-data-name {
      vertical-align: bottom;
      margin-bottom: 4;
      margin-left: 3;
      font-size: 12;
    }
    .anime-bangumi-data-large {
      vertical-align: bottom;
      font-size: 46;
    }
    .anime-bangumi-data-small {
      font-size: 22;
      vertical-align: bottom;
      margin-bottom: 12;
    }
    .anime-bangumi-data-following {
      font-size: 32;
      vertical-align: bottom;
      margin-bottom: 8;
    }
    .anime-bangumi-data-following-surfix {
      font-size: 14;
      vertical-align: bottom;
      margin-bottom: 12;
    }
	`],
	inputs: [
		'bangumi'
	]
})
export class AnimeListBangumiComponent{
	private _bangumi: Bangumi;
	get bangumi() {
		return this._bangumi;
	}
	set bangumi(bangumi: Bangumi){
		this._bangumi = bangumi;
	}
}