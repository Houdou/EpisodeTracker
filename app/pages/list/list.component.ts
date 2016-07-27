import {Component} from '@angular/core';

@Component({
	selector: 'epi-list',
	template: `
	<ListView [items]="source">
		<template let-item="item" let-odd="odd" let-even="even">
			<Label text="ListItem" textWrap="true"></Label>
		</template>
	</ListView>
	`
})
export class EpiList {

	constructor() {

	}
}