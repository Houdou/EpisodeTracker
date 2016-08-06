export class User {
    private _UserId: string;
    get UserId() {
        return this._UserId;
    }

    constructor(id: string) {
        this._UserId = id;
    }
}