import { Episode } from './episode';
import { Season } from './season';

export class Bangumi {
	public BangumiId: string; //GUID
	public Name: string;
	public LocalName: string;
	public EpisodeCount: number;
	public Year: number;
	public Season: Season;
	public DayOfWeek: number;
	public StartDate: Date;
	public Description: string;
	public LatestEpisode: number;

	// public News: List<BangumiNews>;
	public Episodes: List<Episode>;
	
	constructor() {
		
	}
}