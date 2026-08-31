# [2590. Design a Todo List](https://leetcode.com/problems/design-a-todo-list/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 47 | 15 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`design`](https://leetcode.com/tag/design), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `bloomberg`

## Description

Design a Todo List Where users can add **tasks**, mark them as **complete**, or get a list of pending tasks. Users can also add **tags** to tasks and can filter the tasks by certain tags.

Implement the `TodoList` class:

	- `TodoList()` Initializes the object.

	- `int addTask(int userId, String taskDescription, int dueDate, List tags)` Adds a task for the user with the ID `userId` with a due date equal to `dueDate` and a list of tags attached to the task. The return value is the ID of the task. This ID starts at `1` and is **sequentially** increasing. That is, the first task's id should be `1`, the second task's id should be `2`, and so on.

	- `List getAllTasks(int userId)` Returns a list of all the tasks not marked as complete for the user with ID `userId`, ordered by the due date. You should return an empty list if the user has no uncompleted tasks.

	- `List getTasksForTag(int userId, String tag)` Returns a list of all the tasks that are not marked as complete for the user with the ID `userId` and have `tag` as one of their tags, ordered by their due date. Return an empty list if no such task exists.

	- `void completeTask(int userId, int taskId)` Marks the task with the ID `taskId` as completed only if the task exists and the user with the ID `userId` has this task, and it is uncompleted.

 

**Example 1:**

```

Input
[&quot;TodoList&quot;, &quot;addTask&quot;, &quot;addTask&quot;, &quot;getAllTasks&quot;, &quot;getAllTasks&quot;, &quot;addTask&quot;, &quot;getTasksForTag&quot;, &quot;completeTask&quot;, &quot;completeTask&quot;, &quot;getTasksForTag&quot;, &quot;getAllTasks&quot;]
[[], [1, &quot;Task1&quot;, 50, []], [1, &quot;Task2&quot;, 100, [&quot;P1&quot;]], [1], [5], [1, &quot;Task3&quot;, 30, [&quot;P1&quot;]], [1, &quot;P1&quot;], [5, 1], [1, 2], [1, &quot;P1&quot;], [1]]
Output
[null, 1, 2, [&quot;Task1&quot;, &quot;Task2&quot;], [], 3, [&quot;Task3&quot;, &quot;Task2&quot;], null, null, [&quot;Task3&quot;], [&quot;Task3&quot;, &quot;Task1&quot;]]

Explanation
TodoList todoList = new TodoList();
todoList.addTask(1, &quot;Task1&quot;, 50, []); // return 1. This adds a new task for the user with id 1.
todoList.addTask(1, &quot;Task2&quot;, 100, [&quot;P1&quot;]); // return 2. This adds another task for the user with id 1.
todoList.getAllTasks(1); // return [&quot;Task1&quot;, &quot;Task2&quot;]. User 1 has two uncompleted tasks so far.
todoList.getAllTasks(5); // return []. User 5 does not have any tasks so far.
todoList.addTask(1, &quot;Task3&quot;, 30, [&quot;P1&quot;]); // return 3. This adds another task for the user with id 1.
todoList.getTasksForTag(1, &quot;P1&quot;); // return [&quot;Task3&quot;, &quot;Task2&quot;]. This returns the uncompleted tasks that have the tag &quot;P1&quot; for the user with id 1.
todoList.completeTask(5, 1); // This does nothing, since task 1 does not belong to user 5.
todoList.completeTask(1, 2); // This marks task 2 as completed.
todoList.getTasksForTag(1, &quot;P1&quot;); // return [&quot;Task3&quot;]. This returns the uncompleted tasks that have the tag &quot;P1&quot; for the user with id 1.
                                  // Notice that we did not include &quot;Task2&quot; because it is completed now.
todoList.getAllTasks(1); // return [&quot;Task3&quot;, &quot;Task1&quot;]. User 1 now has 2 uncompleted tasks.


```

 

**Constraints:**

	- `1 <= userId, taskId, dueDate <= 100`

	- `0 <= tags.length <= 100`

	- `1 <= taskDescription.length <= 50`

	- `1 <= tags[i].length, tag.length <= 20`

	- All `dueDate` values are unique.

	- All the strings consist of lowercase and uppercase English letters and digits.

	- At most `100` calls will be made for each method.

---

**Links:** [Submissions](https://leetcode.com/problems/design-a-todo-list/) | [Solutions](https://leetcode.com/problems/design-a-todo-list/)
