const express = require('express');
const { body } = require("express-validator");
const coursesController = require("../controllers/course.controller");
const Router = express.Router();

Router.route('/').get(coursesController.getAllcourses).post(
  [
    body("title")
      .notEmpty()
      .withMessage("title is require")
      .isLength({ min: 2 })
      .withMessage("minimum length is 2"),
    body("price").notEmpty().withMessage("price is require"),
  ],
  coursesController.addCourse
)
Router.route("/:courseId").get(coursesController.getSinglecourse)
   .patch(coursesController.editCourse)
   .delete(coursesController.deleteCourse);

module.exports = Router;