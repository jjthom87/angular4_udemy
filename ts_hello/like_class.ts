export class Like {
	constructor(private _currentLikes: number, private _likers: number[]){}

	likeEvent(user){
		if(this._likers.length > 0){
			if(this._likers.indexOf(user._id) > -1){
			 		this._likers.splice(this._likers.indexOf(user._id),1)
					this._currentLikes--;
			} else {
				this._likers.push(user._id)
				this._currentLikes++;	
			}
		} else {
			this._likers.push(user._id)
			this._currentLikes++;
		}
	}
}