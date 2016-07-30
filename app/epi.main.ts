import { Component } from "@angular/core";

import { EpiAnimeList } from './pages/anime/anime.component';
import { EpiPersonalList } from './pages/personal/personal.component';
import { EpiSettingsList } from './pages/settings/settings.component';

@Component({
	selector: "epi",
	template: `
		<TabView #tabView>
			<GridLayout *tabItem="{title: 'List'}">
				<epi-list></epi-list>
			</GridLayout>
			<GridLayout *tabItem="{title: 'Home'}">
				<epi-anime></epi-anime>
			</GridLayout>
			<GridLayout *tabItem="{title: 'Settings'}">
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

}