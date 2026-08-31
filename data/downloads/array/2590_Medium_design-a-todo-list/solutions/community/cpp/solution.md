# Java Code| Following OOPS Principles| Production Ready Code|

**Author:** tanujarora2703
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-todo-list/solutions/4278445/](https://leetcode.com/problems/design-a-todo-list/solutions/4278445/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Todo {
    int userId;
    int taskID;
    String taskDescription;
    int dueDate;
    List<String> tagList;
    boolean isComplete;

    public Todo(int userId, String taskDescription, int dueDate, List<String> tags) {
        this.userId = userId;
        this.taskDescription = taskDescription;
        this.dueDate = dueDate;
        this.tagList = tags;
        this.isComplete = false;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getTaskID() {
        return taskID;
    }

    public void setTaskID(int taskID) {
        this.taskID = taskID;
    }

    public String getTaskDescription() {
        return taskDescription;
    }

    public void setTaskDescription(String taskDescription) {
        this.taskDescription = taskDescription;
    }

    public int getDueDate() {
        return dueDate;
    }

    public void setDueDate(int dueDate) {
        this.dueDate = dueDate;
    }

    public List<String> getTagList() {
        return tagList;
    }

    public void setTagList(List<String> tagList) {
        this.tagList = tagList;
    }

    public boolean isComplete() {
        return isComplete;
    }

    public void setComplete(boolean complete) {
        isComplete = complete;
    }
}

class TodoList {
    private final Map<Integer, List<Todo>> map;
    private Integer taskId = 1;

    public TodoList() {
        this.map = new HashMap<>();
    }

    public int addTask(int userId, String taskDescription, int dueDate, List<String> tags) {
        Todo todo = new Todo(userId, taskDescription, dueDate, tags);
        todo.setTaskID(taskId++);
        map.computeIfAbsent(userId, k -> new ArrayList<>()).add(todo);
        return todo.getTaskID();
    }

    public List<String> getAllTasks(int userId) {
        if (containsUser(userId)) {
            return map.get(userId).stream().filter(task -> !task.isComplete).
                    sorted((a, b) -> a.getDueDate() - b.getDueDate())
                    .map(todo -> todo.taskDescription).
                    collect(Collectors.toList());
        } else {
            return new ArrayList<>();
        }
    }

    public List<String> getTasksForTag(int userId, String tag) {
        if (containsUser(userId)) {
            return map.get(userId).stream()
                    .filter(todo -> todo.tagList.contains(tag))
                    .filter(task->!task.isComplete).
                    sorted((a,b)->a.getDueDate()-b.getDueDate()).
                    map(todo -> todo.taskDescription).
                    collect(Collectors.toList());
        } else {
            return new ArrayList<>();
        }

    }

    public void completeTask(int userId, int taskId) {
        if(containsUser(userId)){
            Optional<Todo> first = map.get(userId).stream().filter(task -> task.taskID == taskId)
                    .findFirst();
            first.ifPresent(todo -> todo.setComplete(true));
        }
    }

    private boolean containsUser(int userId) {
        return map.containsKey(userId);
    }
}





```