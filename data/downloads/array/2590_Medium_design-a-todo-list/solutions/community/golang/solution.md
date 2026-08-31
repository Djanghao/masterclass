# Go solution

**Author:** x3la
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-todo-list/solutions/3559893/](https://leetcode.com/problems/design-a-todo-list/solutions/3559893/)

---

```
type Task struct {
    id int
    description string
    dueDate int
    complete bool
    tags map[string]bool
}

type Tasks []Task

type TodoList struct {
    currentId int
    userTasks map[int]Tasks
}

func Constructor() TodoList {
    return TodoList{
        currentId: 0,
        userTasks: map[int]Tasks{},
    }
}

func (this *TodoList) AddTask(userId int, taskDescription string, dueDate int, tags []string) int {
    this.currentId++
    tagMap := map[string]bool{}
    for _, t := range tags {
        tagMap[t] = true
    }
    t := Task{
        id: this.currentId,
        description: taskDescription,
        dueDate: dueDate,
        tags: tagMap,
    }
    this.userTasks[userId] = append(this.userTasks[userId], t)
    return this.currentId
}

func (this *TodoList) GetAllTasks(userId int) []string {
    tasks := this.userTasks[userId]
    sort.Slice(tasks, func(i, j int) bool {
        return tasks[i].dueDate < tasks[j].dueDate
    })

    res := []string{}
    for _, t := range tasks {
        if !t.complete {
            res = append(res, t.description)
        }
    }

    return res
}


func (this *TodoList) GetTasksForTag(userId int, tag string) []string {
    tasks := this.userTasks[userId]
    sort.Slice(tasks, func(i, j int) bool {
        return tasks[i].dueDate < tasks[j].dueDate
    })
    
    res := []string{}
    for _, t := range tasks {
        if t.tags[tag] && !t.complete {
            res = append(res, t.description)
        }
    }

    return res
}

func (this *TodoList) CompleteTask(userId int, taskId int)  {
    for i, t := range this.userTasks[userId] {
        if t.id == taskId {
            this.userTasks[userId][i].complete = true
        }
    }
}
```