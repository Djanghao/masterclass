# Javascript

**Author:** faustaleonardo
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-a-todo-list/solutions/3309574/](https://leetcode.com/problems/design-a-todo-list/solutions/3309574/)

---

# Code
```
class TodoList {
  constructor() {
    this.data = {}; // { userId: {taskId: [taskDescription, dueDate, tags]}}
    this.taskId = 0;
  }

  addTask(userId, taskDescription, dueDate, tags) {
    this.taskId++;
    this.data[userId] = this.data[userId] || {};
    this.data[userId][this.taskId] = [taskDescription, dueDate, new Set(tags)];

    return this.taskId;
  }

  getAllTasks(userId) {
    const currData = this.data[userId] || {};
    const tasks = [];

    for (const currTaskId in currData) {
      const [taskDescription, dueDate, _] = currData[currTaskId];
      tasks.push([taskDescription, dueDate]);
    }

    return this.sortTasks(tasks);
  }

  getTasksForTag(userId, tag) {
    const currData = this.data[userId] || {};
    const tasks = [];

    for (const currTaskId in currData) {
      const [taskDescription, dueDate, tags] = currData[currTaskId];
      if ((tags.size === 0 && tag.length === 0) || tags.has(tag)) {
        tasks.push([taskDescription, dueDate]);
      }
    }

    return this.sortTasks(tasks);
  }

  completeTask(userId, taskId) {
    if (this.data[userId]?.[taskId]) {
      delete this.data[userId][taskId];
    }
  }

  sortTasks(tasks) {
    return tasks
      .sort((a, b) => a[1] - b[1])
      .map(([taskDescription, _]) => taskDescription);
  }
}

```