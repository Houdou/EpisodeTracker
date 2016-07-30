import { Component } from '@angular/core';

import { Bangumi } from '../../shared/bangumi/bangumi';
import { AnimeListBangumiComponent } from './anime.bangumi.component';

@Component({
	selector: 'epi-anime',
	template: `
	<ListView [items]="list">
		<template let-item="item" let-odd="odd" let-even="even">
			<epi-anime-bangumi [bangumi]="item"></epi-anime-bangumi>
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
}