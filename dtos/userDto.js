export class UserDto {
	email
	id
	isAdmin
	name
	constructor(model) {
		this.email = model.email
		this.userName = model.userName
		this.id = model._id
		this.isAdmin = model.isAdmin
	}
}
