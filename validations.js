import { body } from 'express-validator'

export const registerValidation = [
	body('userName', 'Имя не может быть короче 3 символов').isLength({
		min: 3,
	}),
	body('userSurName', 'Фамилия не может быть короче 3 символов').isLength({
		min: 3,
	}),
	body('email', 'Неверный формат почты').isEmail(),
	body('password', 'Пароль должен быть минимум 5 символов').isLength({
		min: 5,
	}),
	body('department', 'Отделение не может быть пустым').notEmpty(),
	body('group', 'Номер группы не может быть пустым').notEmpty(),
]

export const loginValidation = [
	body('email', 'Неверный формат почты').isEmail(),
	body('password', 'Пароль должен быть минимум 5 символов').isLength({
		min: 5,
	}),
]
