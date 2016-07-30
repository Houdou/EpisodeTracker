import { Component } from "@angular/core";

import { EpiAnimeList } from './pages/anime/anime.component';
import { EpiPersonalList } from './pages/personal/personal.component';
import { EpiSettingsList } from './pages/settings/settings.component';

@Component({
	moduleId: module.id,
	selector: "epi",
	template: `
	<TabView [selectedIndex]="tabSelectedIndex">
		<GridLayout *tabItem="{title: 'List', iconSource: '~/img/list.png'}">
			<epi-list></epi-list>
		</GridLayout>
		<GridLayout *tabItem="{title: 'Home', iconSource: '~/img/home.png'}">
			<epi-anime></epi-anime>
		</GridLayout>
		<GridLayout *tabItem="{title: 'Settings', iconSource: '~/img/settings.png'}">
			<epi-settings></epi-settings>
		</GridLayout>
	</TabView>
	`,
	directives: [
		EpiAnimeList,
		EpiPersonalList,
		EpiSettingsList
	]
})
export class EpiMain {
	public tabSelectedIndex: number;

	constructor() {
    this.tabSelectedIndex = 1;
	}
}