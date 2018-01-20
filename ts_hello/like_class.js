"use strict";
exports.__esModule = true;
var Like = /** @class */ (function () {
    function Like(_currentLikes, _likers) {
        this._currentLikes = _currentLikes;
        this._likers = _likers;
    }
    Like.prototype.likeEvent = function (user) {
        if (this._likers.length > 0) {
            if (this._likers.indexOf(user._id) > -1) {
                this._likers.splice(this._likers.indexOf(user._id), 1);
                this._currentLikes--;
            }
            else {
                this._likers.push(user._id);
                this._currentLikes++;
            }
        }
        else {
            this._likers.push(user._id);
            this._currentLikes++;
        }
    };
    return Like;
}());
exports.Like = Like;
