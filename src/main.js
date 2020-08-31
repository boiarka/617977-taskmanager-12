import SiteMenuView from "./view/site-menu.js";
import FilterView from "./view/filter.js";

import {
  generateTask
} from "./mock/task.js";

import BoardPresenter from "./presenter/board.js";
import FilterPresenter from "./presenter/filter.js";

import TasksModel from "./model/tasks.js";
import FilterModel from "./model/filter.js";

import {
  render,
  RenderPosition,
  replace,
  remove
} from "./utils/render.js";

const TASK_COUNT = 24;

const tasks = new Array(TASK_COUNT).fill().map(generateTask);

const tasksModel = new TasksModel();
tasksModel.setTasks(tasks);

const filterModel = new FilterModel();

const mainElement = document.querySelector(`.main`);
const mainControlElement = document.querySelector(`.main__control`);

const boardPresenter = new BoardPresenter(mainElement, tasksModel, filterModel);
const filterPresenter = new FilterPresenter(mainElement, filterModel, tasksModel);

render(mainControlElement, new SiteMenuView(), RenderPosition.BEFOREEND);


filterPresenter.init();
boardPresenter.init();

document.querySelector(`#control__new-task`).addEventListener(`click`, (evt) => {
  evt.preventDefault();
  boardPresenter.createTask();
});
