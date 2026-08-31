# Python - smells like database operations

**Author:** Ante_
**Votes:** 7
**Link:** [https://leetcode.com/problems/design-a-todo-list/solutions/3309286/](https://leetcode.com/problems/design-a-todo-list/solutions/3309286/)

---

# Intuition
Constraints are low, allows all kinds of solutions.
In case of hashmaps and lists there is one hidden trap, combinations of tag/user can have duplicates.
Problem looks like typical database query feature set, index on task/user queries and order on user/tag query. Can be solved with a bunch of dictionaries and BST.
Here one can make decision what to have faster, kind of trade off, in my scenario I chose 'complete task' and 'add task' to have to have around O(1), other 2 operations have to return collection of items so they are already in the area of O(n).

# Approach
Make 3 dictionaries to support 3 different operations.

# Complexity
- Time complexity:
$$O(1)$$ - Complete task
$$O(n)$$ - get all tasks, n is number of tasks per user
$$O(nlogn)$$ - get all tasks for tag, n is number of tasks per user, sorting prior return
$$O(1)$$ - add tasks for tag, this is more like $$O(T)$$ where T is number of tags, $$O(1)$$ is per task connection with tag

- Space complexity:
$$O(n)$$ 

# Code
```
from collections import defaultdict
from sortedcontainers import SortedList as BST
class TodoList:

    def __init__(self):
        self.counter = 0
        self.users_tasks = defaultdict(BST)
        self.complete = defaultdict(set)
        self.user_tags = defaultdict(set)

    def addTask(self, userId: int, taskDescription: str, dueDate: int, tags: List[str]) -> int:
        self.counter += 1
        task_id = self.counter

        self.users_tasks[userId].add((dueDate, task_id, taskDescription))
        for tag in tags:
            self.user_tags[(userId, tag)].add((dueDate, taskDescription, task_id))

        return task_id

    def getAllTasks(self, userId: int) -> List[str]:
        return [desc for _, t, desc in self.users_tasks[userId] if t not in self.complete[userId]]
        
    def getTasksForTag(self, userId: int, tag: str) -> List[str]:
        result = sorted([(date, desc) for date, desc, task in self.user_tags[(userId, tag)] if task not in self.complete[userId]])
        return map(lambda x: x[1], result)

    def completeTask(self, userId: int, taskId: int) -> None:
        self.complete[userId].add(taskId)
        
```