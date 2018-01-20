import { Like } from './like_class';
import { User } from './user_class';

var jared = new User(1, "Jared");
var joey = new User(2, "Joey");
var jimmy = new User(3, "Jimmy");

var jareds_comment = new Like(0, []);

jareds_comment.likeEvent(jimmy);
jareds_comment.likeEvent(joey);
jareds_comment.likeEvent(jimmy);
jareds_comment.likeEvent(jared);
console.log(jareds_comment)