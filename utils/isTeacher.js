export default (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1]
		if (!token) {
			res.status(400).json({
				message: 'Пользователь не авторизирован',
			})
		}

		const { roles: userRoles } = jwt.verify(token, process.env.SECRET_KEY)

		let hasRole = false

		userRoles.forEach(role => {
			if (roles.includes(role)) {
				hasRole = true
			}
		})

		if (!hasRole) {
			return res.status(403).json({
				message: 'У вас нет доступа',
			})
		}
		next()
	} catch (error) {
		console.log(error)
		res.json({
			message: 'Произошла ошибка',
		})
	}
}
