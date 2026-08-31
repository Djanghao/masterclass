# Java OOD

**Author:** travis0315
**Votes:** 3
**Link:** [https://leetcode.com/problems/design-a-todo-list/solutions/3455694/](https://leetcode.com/problems/design-a-todo-list/solutions/3455694/)

---

# Code
```
import java.util.Optional;

class TodoList {

    private Map<Integer, List<Task>> tasksByUid;
    private int sequence;

    public TodoList() {
        tasksByUid = new HashMap<>();
        sequence = 1;
    }
    
    public int addTask(int userId, String taskDescription, int dueDate, List<String> tags) {
        tasksByUid.computeIfAbsent(userId, unused -> new ArrayList<>());

        int taskId = sequence++;
        tasksByUid.get(userId).add(
            new Task(taskId, dueDate, taskDescription, tags));
        return taskId;
    }
    
    public List<String> getAllTasks(int userId) {
        return getAllTasks(userId, Optional.empty());
    }
    
    public List<String> getTasksForTag(int userId, String tag) {
        return getAllTasks(userId, Optional.of(tag));
    }
    
    public void completeTask(int userId, int taskId) {
        tasksByUid.getOrDefault(userId, List.of()).stream()
            .filter(task -> task.id == taskId)
            .forEach(task -> task.deleted = true);
    }

    private List<String> getAllTasks(int userId, Optional<String> tag) {
        return tasksByUid.getOrDefault(userId, List.of()).stream()
            .filter(task -> !task.deleted
                && (tag.isEmpty() || task.tags.contains(tag.get())))
            .sorted((a, b) -> a.dueDate - b.dueDate)
            .map(task -> task.description)
            .collect(Collectors.toList());
    }

    private class Task {
        public int id;
        public int dueDate;
        public String description;
        public boolean deleted;
        public Set<String> tags;
        Task(int id, int dueDate, String description, List<String> tags) {
            this.id = id;
            this.dueDate = dueDate;
            this.description = description;
            this.tags = Set.copyOf(tags);
        }
    }
}
```