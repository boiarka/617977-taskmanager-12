import {
  createNavTemplate
} from "./view/site-menu.js";

import {
  createFilterTemplate
} from "./view/filter.js";

import {
  createBoardTemplate
} from "./view/board.js";

import {
  createTaskTemplate
} from "./view/task.js";

import {
  createTaskEditTemplate
} from "./view/task-edit.js";

import {
  createLoadMoreButtonTemplate
} from "./view/load-more.js";

const TASK_COUNT = 3;


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const mainElement = document.querySelector(`.main`);
const mainControlElement = document.querySelector(`.main__control`);

render(mainControlElement, createNavTemplate(), `beforeend`);
render(mainElement, createFilterTemplate(), `beforeend`);
render(mainElement, createBoardTemplate(), `beforeend`);

const boardElement = mainElement.querySelector(`.board`);
const taskListElement = boardElement.querySelector(`.board__tasks`);

render(taskListElement, createTaskEditTemplate(), `beforeend`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate(), `beforeend`);
}


render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);
