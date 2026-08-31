# Lambda Success Strikes Again!!!

**Author:** jbarrow23
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-todo-list/solutions/4566713/](https://leetcode.com/problems/design-a-todo-list/solutions/4566713/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem is one of the most important problems on Leetcode!!! Really, its so basic?! Ask Amazon Rustaceans how hard async actions are. Its so hard, its the whole goal of 2024 for the entire Rust community. Luckily for Pythonistas, Python 3.11 incorporated TaskGroups. This way asyncio tasks can be managed in a similar way. If you feel like the future, go ahead and write your own async task managers!


# Complexity
- Two areas of improvement with one algorithm!!! Go ahead and make the items.append() operation an items.insert() operation with a binary search hidden method. This way, you optimially insert the task based on the due date. Still better than 99.11% runtime though. Not bad...

# Fare Well
- Take care LC, going off to go design systems. Even though this will be my last post, I would recommend LC to anyone in 2024.

# Code
```
class TodoList:

    def __init__(self):
        # user_id -> key... {} with the task_id being the key
        self.tasks = {}
        self.counter = 0

    def addTask(self, userId: int, taskDescription: str, dueDate: int, tags: List[str]) -> int:
        self.counter += 1
        taskId = self.counter
        
        if userId not in self.tasks.keys():
            self.tasks[userId] = {}

        self.tasks[userId][taskId] = (taskDescription, dueDate, tags)

        return taskId

    def custom_cmp(self, items: List[Tuple[str, int]]) -> List[str]:
        return [taskD for taskD, _ in sorted(items, key=lambda x: x[1])]

    def getAllTasks(self, userId: int) -> List[str]:
        try:
            items = []

            # Binary search insert
            for taskId, _tuple in self.tasks[userId].items():
                items.append((_tuple[0], _tuple[1]))

            return self.custom_cmp(items)
            
        except:
            return []

    def getTasksForTag(self, userId: int, tag: str) -> List[str]:
        items = []
        # Binary search insert
        for taskId, _tuple in self.tasks[userId].items():
            if tag in _tuple[2]:
                items.append((_tuple[0], _tuple[1]))

        return self.custom_cmp(items)

    def completeTask(self, userId: int, taskId: int) -> None:
        try:
            del self.tasks[userId][taskId]
        except:
            pass


# Your TodoList object will be instantiated and called as such:
# obj = TodoList()
# param_1 = obj.addTask(userId,taskDescription,dueDate,tags)
# param_2 = obj.getAllTasks(userId)
# param_3 = obj.getTasksForTag(userId,tag)
# obj.completeTask(userId,taskId)
```