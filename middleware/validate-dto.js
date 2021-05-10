function validateDto(ajvValidate) {
  return (req, res, next) => {
    const valid = ajvValidate(req.body);
    if (!valid) {
      // it is imperative that the reference to the errors is copied
      // the next time ajv runs the errors object could be overridden
      // because under the hood it is just a pointer
      // that's why the reference needs to be copied in the same execution
      // block. Note that Node is single-threaded and you do not have
      // concurrency
      const errors = ajvValidate.errors;
      res.status(400).json(errors);
    }
    next();
  };
}

module.exports = validateDto;
