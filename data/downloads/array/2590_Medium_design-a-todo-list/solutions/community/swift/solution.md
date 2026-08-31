# Accepted Swift answer - Interview Question

**Author:** user8668bd
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-todo-list/solutions/4979961/](https://leetcode.com/problems/design-a-todo-list/solutions/4979961/)

---

# Intuition
This is the same question I was asked in Bloomberg interview for Senior Mobile Engineer.
I did it in different way because they asked me as Tasks : [String]() and addTask("") and other methods.
I wanted to solve this after I got rejected. 

# Approach

I am using a struct for my data model. I got 274 ms.
This is the easiest Leetcode problem I have seen. (If you have any swift experience before and have worked with API).


# Code
```

class TodoList {

    struct Task {
        let taskId: Int
        let userId: Int
        let taskDescription: String
        let dueDate: Int
        let tags: [String]
        var completed: Bool
    }

    var tasks: [Task] = []

    init() {
        
    }
    
    func addTask(_ userId: Int, _ taskDescription: String, _ dueDate: Int, _ tags: [String]) -> Int {
        let taskId = tasks.count + 1
        let task = Task(taskId: taskId, userId: userId, taskDescription: taskDescription, dueDate: dueDate, tags: tags, completed: false)
        tasks.append(task)
        return taskId
    }
    
    func getAllTasks(_ userId: Int) -> [String] {
        let userTasks = tasks.filter { $0.userId == userId && !$0.completed }.sorted { $0.dueDate < $1.dueDate }
        return userTasks.map { $0.taskDescription }
    }
    
    func getTasksForTag(_ userId: Int, _ tag: String) -> [String] {
         let userTasksWithTag = tasks.filter { $0.userId == userId && !$0.completed && $0.tags.contains(tag) }.sorted { $0.dueDate < $1.dueDate }
        return userTasksWithTag.map { $0.taskDescription }
    }
    
    func completeTask(_ userId: Int, _ taskId: Int) {
        if let index = tasks.firstIndex(where: { $0.taskId == taskId && $0.userId == userId && !$0.completed }) {
            tasks[index].completed = true
        }
    }
}


/**
 * Your TodoList object will be instantiated and called as such:
 * let obj = TodoList()
 * let ret_1: Int = obj.addTask(userId, taskDescription, dueDate, tags)
 * let ret_2: [String] = obj.getAllTasks(userId)
 * let ret_3: [String] = obj.getTasksForTag(userId, tag)
 * obj.completeTask(userId, taskId)
 */
```