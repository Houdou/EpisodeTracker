import { Component } from "@angular/core";

import { EpiHome } from './pages/home/home.component';

@Component({
	selector: "epi",
	template: `
		<TabView #tabView>
			<GridLayout *tabItem="{title: 'List'}">
			<ListView [items]="source2">
				<template let-item="item" let-odd="odd" let-even="even">
					<Label text="ListItem" textWrap="true"></Label>
				</template>
			</ListView>
			</GridLayout>
			<GridLayout *tabItem="{title: 'Home'}">
				<epi-home></epi-home>
			</GridLayout>
			<GridLayout *tabItem="{title: 'Settings'}">
			<ListView [items]="source3">
				<template let-item="item" let-odd="odd" let-even="even">
					<Label text="SettingsItem" textWrap="true"></Label>
				</template>
			</ListView>
			</GridLayout>
		</TabView>
	`,
	directives: [
		EpiHome
	]
})
export class EpiMain {
	source2 = ["Item"];
	source3 = ["Item"];

	onLoaded(event) {

	}

	onItemLoaded(event) {

	}

	onItemTap(event) {

	}
}