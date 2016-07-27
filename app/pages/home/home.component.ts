import { Component } from '@angular/core';

import { Bangumi } from '../../shared/bangumi/bangumi';
import { HomeBangumiComponent } from './home.bangumi.component';

@Component({
	selector: 'epi-home',
	template: `
	<ListView [items]="list">
		<template let-item="item" let-odd="odd" let-even="even">
			<epi-home-bangumi [bangumi]="item"></epi-home-bangumi>
		</template>
	</ListView>
	`,
	directives: [
		HomeBangumiComponent
	]
})
export class EpiHome {
	public list: Array<Bangumi> = [];

	constructor() {
		this.list.push(new Bangumi('New Game', 'newgame.jpg'), new Bangumi('リライト', 'rewrite.jpg'));
	}
}