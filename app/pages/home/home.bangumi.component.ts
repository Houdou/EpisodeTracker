import { Component, Input } from '@angular/core';

import { Bangumi } from '../../shared/bangumi/bangumi';

@Component({
	selector: 'epi-home-bangumi',
	template: `
		<GridLayout rows="30, 60" columns="90, *, *" cssClass="bangumi-item">
			<Image row="0" rowSpan="2" col="0"
				horizontalAlignment="center" verticalAlignment="center"
				src="~/images/{{bangumi.thumbnail}}" cssClass="home-bangumi-thumbnail">
			</Image>
			<Label row="0" col="1" colSpan="2" text="{{bangumi.title}}" textWrap="true" cssClass="home-bangumi-title"></Label>
			<Label row="1" col="1"
				horizontalAlignment="left"
				text="2/4" textWrap="true" cssClass="home-bangumi-title"></Label>
			<Label row="1" col="2"
				horizontalAlignment="left"
				text="13" textWrap="true" cssClass="home-bangumi-title"></Label>
		</GridLayout>
	`,
	styles: [`
		.bangumi-item {
			
		}
		.home-bangumi-thumbnail {
			
		}
		.home-bangumi-title {
			margin: 5;
		}
	`],
	inputs: [
		'bangumi'
	]
})
export class HomeBangumiComponent{
	private _bangumi: Bangumi;
	get bangumi() {
		return this._bangumi;
	}
	set bangumi(bangumi: Bangumi){
		this._bangumi = bangumi;
	}
}