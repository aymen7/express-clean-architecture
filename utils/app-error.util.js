class AppError extends Error {
    constructor(message, status = 500) {
        super(message)
        this.message = message
        this.status = status
    }
}
module.exports = AppError