import { Component } from '@angular/core';

import { Bangumi } from '../../shared/bangumi/bangumi';
import { AnimeListBangumiComponent } from './anime.bangumi.component';

@Component({
	selector: 'epi-anime',
	template: `
	<ListView [items]="list">
		<template let-item="item" let-odd="odd" let-even="even">
			<GridLayout rows="*" columns="*" (swipe)="onSwipe($event, item)">
				<epi-anime-bangumi [bangumi]="item"></epi-anime-bangumi>
			</GridLayout>
		</template>
	</ListView>
	`,
	directives: [
		AnimeListBangumiComponent
	]
})
export class EpiAnimeList {
	public list: Array<Bangumi> = [];

	constructor() {
		this.list.push(new Bangumi('New Game', 'newgame.jpg'), new Bangumi('リライト', 'rewrite.jpg'));
	}

	onSwipe(data: any, item: Bangumi) {
		for(var i in data){
			console.log(i + ", " + data[i]);
		}
		if(data.direction == 1)
			console.log("Swipe Right");
		if(data.direction == 2)
			console.log("Swipe Left");

		console.log(item.title);
	}
}