import { Component } from '@angular/core';

import { Bangumi } from '../../shared/bangumi/bangumi';
import { PersonalListBangumiComponent } from './personal.bangumi.component';

@Component({
	selector: 'epi-list',
	template: `
	<ListView [items]="list">
		<template let-item="item" let-odd="odd" let-even="even">
			<epi-list-bangumi [bangumi]="item"></epi-list-bangumi>
		</template>
	</ListView>
	`,
	directives: [
		PersonalListBangumiComponent
	]
})
export class EpiPersonalList {
	public list: Array<Bangumi> = [];

	constructor() {
		this.list.push(new Bangumi('New Game', 'newgame.jpg'), new Bangumi('リライト', 'rewrite.jpg'));
	}
}