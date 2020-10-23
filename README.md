# To Do List

## Features

- Add you daily goals/tasks to the list.
- Mention deadline and category of the task.
- Once finished, you can delete multiple tasks at once.

## Requirements

- [Node.js](https://nodejs.org)
  - expressjs [ExpressJS HTTP middleware](https://npmjs.org/package/express)
  - ejs [Embedded JavaScript templates](https://npmjs.org/package/ejs)
- [MongoDB](http://mongodb.org)

## Installation

Clone the repo locally then install all the dependencies using [NPM](https://npmjs.org/)

```bash
$ git clone https://github.com/sumbulkaynat/To-Do-List.git
$ cd ToDoList
$ npm init
$ npm install express ejs mongoose

```

## Local Development


Start the MongoDB server in a seperate bash/pm2

```bash
$ mongod
```

and then start the express server via `npm`.

```bash
$ nodemon index.js
```
