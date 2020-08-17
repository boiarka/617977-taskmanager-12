import SiteMenuView from "./view/site-menu.js";
import FilterView from "./view/filter.js";

import {
  generateTask
} from "./mock/task.js";

import {
  generateFilter
} from "./mock/filter.js";

import BoardPresenter from "./presenter/board.js";

import {
  render,
  RenderPosition,
  replace,
  remove
} from "./utils/render.js";

const TASK_COUNT = 24;

const tasks = new Array(TASK_COUNT).fill().map(generateTask);
const filters = generateFilter(tasks);

const mainElement = document.querySelector(`.main`);
const mainControlElement = document.querySelector(`.main__control`);

const boardPresenter = new BoardPresenter(mainElement);

render(mainControlElement, new SiteMenuView(), RenderPosition.BEFOREEND);
render(mainElement, new FilterView(filters), RenderPosition.BEFOREEND);

boardPresenter.init(tasks);
