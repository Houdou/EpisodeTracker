import { Bangumi } from './bangumi';

export class Episode {
    public EpisodeId: string;

    public Index: number;
    public Date: Date;
    public Title: string;
    public Description: string;

    public BangumiId: string;
    public Bangumi: Bangumi;
}