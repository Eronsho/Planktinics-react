class ApiEror extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static badRequest(message) {
    return new ApiEror(404, message);
  }
  static internal(message) {
    return new ApiEror(508, message);
  }
  static forbiddan(message) {
    return new ApiEror(403, message);
  }
}

module.exports = ApiEror;
