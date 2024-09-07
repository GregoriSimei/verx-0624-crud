import { InvalidBirthdayErr, InvalidEmailErr, InvalidNameErr, InvalidPassErr, User } from "./User"

describe('[domain] - User model', () => {
    it('when create an user with name not empty and email not empty and email with "@" character and password not empty and the birthday is not biggest than 120 accourding the current year should return true validation withouth error', () => {
        const dateNow = new Date()
        const [
            day,
            month,
            year
        ] = [
                dateNow.getDay(),
                dateNow.getMonth() + 1,
                dateNow.getFullYear()
            ]
        const dateLowerThan120yearsAgo = new Date(`${year - 118}-${month}-${day}`)
        const user: User = new User({
            name: 'not_empty',
            email: 'not_empty@notempty.com',
            pass: 'not_empty',
            birthday: dateLowerThan120yearsAgo,
        })

        const [allRigth, err] = user.validate()

        expect(err).toBeNull()
        expect(allRigth).toBeTruthy()
    })

    it('when create an user with a empty name and email not empty and email with "@" character and password not empty and the birthday is not biggest than 120 accourding the current year should return false validation with InvalidName error', () => {
        const dateNow = new Date()
        const [
            day,
            month,
            year
        ] = [
                dateNow.getDay(),
                dateNow.getMonth() + 1,
                dateNow.getFullYear()
            ]
        const dateLowerThan120yearsAgo = new Date(`${year - 118}-${month}-${day}`)
        const user: User = new User({
            name: '',
            email: 'not_empty@notempty.com',
            pass: 'not_empty',
            birthday: dateLowerThan120yearsAgo,
        })

        const [allRigth, err] = user.validate()

        expect(err).toBe(InvalidNameErr)
        expect(allRigth).toBeFalsy()
    })

    it('when create an user with a not empty name and a empty email and not empty password and the birthday is not biggest than 120 accourding the current year should return false validation with InvalidEmail error', () => {
        const dateNow = new Date()
        const [
            day,
            month,
            year
        ] = [
                dateNow.getDay(),
                dateNow.getMonth() + 1,
                dateNow.getFullYear()
            ]
        const dateLowerThan120yearsAgo = new Date(`${year - 118}-${month}-${day}`)
        const user: User = new User({
            name: 'not_empty',
            email: '',
            pass: 'not_empty',
            birthday: dateLowerThan120yearsAgo,
        })

        const [allRigth, err] = user.validate()

        expect(err).toBe(InvalidEmailErr)
        expect(allRigth).toBeFalsy()
    })

    it('when create an user with a not empty name and a not empty email and an email withtout "@" character and not empty password and the birthday is not biggest than 120 accourding the current year should return false validation with InvalidEmail error', () => {
        const dateNow = new Date()
        const [
            day,
            month,
            year
        ] = [
                dateNow.getDay(),
                dateNow.getMonth() + 1,
                dateNow.getFullYear()
            ]
        const dateLowerThan120yearsAgo = new Date(`${year - 118}-${month}-${day}`)
        const user: User = new User({
            name: 'not_empty',
            email: 'not_empty_without_character',
            pass: 'not_empty',
            birthday: dateLowerThan120yearsAgo,
        })

        const [allRigth, err] = user.validate()

        expect(err).toBe(InvalidEmailErr)
        expect(allRigth).toBeFalsy()
    })

    it('when create an user with a not empty name and a not empty email and an email witht "@" character and a empty password and the birthday is not biggest than 120 accourding the current year should return false validation with InvalidPass error', () => {
        const dateNow = new Date()
        const [
            day,
            month,
            year
        ] = [
                dateNow.getDay(),
                dateNow.getMonth() + 1,
                dateNow.getFullYear()
            ]
        const dateLowerThan120yearsAgo = new Date(`${year - 118}-${month}-${day}`)
        const user: User = new User({
            name: 'not_empty',
            email: 'not_empty@notempty.com',
            pass: '',
            birthday: dateLowerThan120yearsAgo,
        })

        const [allRigth, err] = user.validate()

        expect(err).toBe(InvalidPassErr)
        expect(allRigth).toBeFalsy()
    })

    it('when create an user with a not empty name and a not empty email and an email witht "@" character and a not empty password and the birthday is biggest than 120 accourding the current year should return false validation with InvalidBirthday error', () => {
        const dateNow = new Date()
        const [
            day,
            month,
            year
        ] = [
                dateNow.getDay(),
                dateNow.getMonth() + 1,
                dateNow.getFullYear()
            ]
        const dateLowerThan120yearsAgo = new Date(`${year - 121}-${month}-${day}`)
        const user: User = new User({
            name: 'not_empty',
            email: 'not_empty@notempty.com',
            pass: 'not_empty',
            birthday: dateLowerThan120yearsAgo,
        })

        const [allRigth, err] = user.validate()

        expect(err).toBe(InvalidBirthdayErr)
        expect(allRigth).toBeFalsy()
    })
})