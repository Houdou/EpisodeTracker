import { Component } from '@angular/core';

import { Bangumi } from '../../shared/bangumi/bangumi';

@Component({
	selector: 'epi-settings',
	template: `
	<ListView [items]="list">
		<template let-item="item" let-odd="odd" let-even="even">
			<Label text="Setting Item" textWrap="true"></Label>
		</template>
	</ListView>
	`,
	directives: [

	]
})
export class EpiSettingsList {
	public list: Array<string> = [];

	constructor() {
		this.list.push('16N01');
	}
}