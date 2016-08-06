import { Bangumi } from '../bangumi/bangumi';

export class UserList {
    public UserId: string;
    public list: Array<Bangumi>;

    public addBangumi(bangumi: Bangumi) {
        // this.list.push(bangumi);
    }

    public removeBangumi(bangumi: Bangumi) {
        // this.list.splice(this.list.indexOf(bangumi), 1);
    }
}