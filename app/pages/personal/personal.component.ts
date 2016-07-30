import { Component } from '@angular/core';

import { Bangumi } from '../../shared/bangumi/bangumi';
import { PersonalListBangumiComponent } from './personal.bangumi.component';

@Component({
	selector: 'epi-list',
	template: `
	<ListView [items]="list">
		<template let-item="item" let-odd="odd" let-even="even">
			<epi-list-bangumi></epi-list-bangumi>
		</template>
	</ListView>
	`,
	directives: [
		PersonalListBangumiComponent
	]
})
export class EpiPersonalList {
	public list: Array<string> = [];

	constructor() {
		this.list.push('16N01');
	}
}