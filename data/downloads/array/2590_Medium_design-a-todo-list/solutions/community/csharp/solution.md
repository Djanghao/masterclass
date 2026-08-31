# C# Using Dictionaries and HashSet

**Author:** amitgupta847
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-todo-list/solutions/5796747/](https://leetcode.com/problems/design-a-todo-list/solutions/5796747/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Used Dictionary<int, Dictionary<int, Task>> for userTasks and Dictionary<string, HashSet<Task>> for tagsMap, similar to Map and Set in Java.
Interface Implementation:

Implemented IComparable<Task> in C# for comparing tasks based on DueDate.

# Approach
<!-- Describe your approach to solving the problem. -->
Using Map for user and then for its tasks.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
    
  public class TodoList
 {


   private class Task : IComparable<Task>
   {
     public int Id { get; private set; }
     public int UserId { get; private set; }
     public string TaskDescription { get; private set; }
     public int DueDate { get; private set; }
     public List<string> Tags { get; private set; }
     public TaskStatus Status { get; set; }

     public Task(int id, int userId, string taskDescription, int dueDate, IList<string> tags)
     {
       Id = id;
       UserId = userId;
       TaskDescription = taskDescription;
       DueDate = dueDate;
       Tags = new List<string>(tags);
       Status = TaskStatus.Incomplete;
     }

     public int CompareTo(Task other)
     {
       return this.DueDate.CompareTo(other.DueDate);
     }

     public override string ToString()
     {
       return TaskDescription;
     }
   }

   private Dictionary<int, Dictionary<int, Task>> userTasks;
   private Dictionary<string, HashSet<Task>> tagsMap;
   private int taskId;

   public TodoList()
   {
     userTasks = new Dictionary<int, Dictionary<int, Task>>();
     tagsMap = new Dictionary<string, HashSet<Task>>();
     taskId = 1;
   }

   public int AddTask(int userId, string taskDescription, int dueDate, IList<string> tags)
   {
     Task task = new Task(taskId, userId, taskDescription, dueDate, tags);

     if (!userTasks.ContainsKey(userId))
     {
       userTasks[userId] = new Dictionary<int, Task>();
     }

     userTasks[userId][taskId] = task;

     foreach (var tag in tags)
     {
       if (!tagsMap.ContainsKey(tag))
       {
         tagsMap[tag] = new HashSet<Task>();
       }
       tagsMap[tag].Add(task);
     }

     taskId++;
     return task.Id;
   }

   public IList<string> GetAllTasks(int userId)
   {
     if (!userTasks.ContainsKey(userId))
     {
       return new List<string>();
     }

     List<Task> tasksList = new List<Task>(userTasks[userId].Values);
     tasksList.Sort();
     List<string> result = new List<string>();

     foreach (Task task in tasksList)
     {
       if (task.Status == TaskStatus.Incomplete)
       {
         result.Add(task.ToString());
       }
     }

     return result;
   }

   public IList<string> GetTasksForTag(int userId, string tag)
   {
     if (!tagsMap.ContainsKey(tag))
     {
       return new List<string>();
     }

     List<Task> tasksList = new List<Task>(tagsMap[tag]);
     tasksList.Sort();
     List<string> result = new List<string>();

     foreach (Task task in tasksList)
     {
       if (task.UserId == userId && task.Status == TaskStatus.Incomplete)
       {
         result.Add(task.ToString());
       }
     }

     return result;
   }

   public void CompleteTask(int userId, int taskId)
   {
     if (!userTasks.ContainsKey(userId))
     {
       return;
     }

     if (!userTasks[userId].ContainsKey(taskId))
     {
       return;
     }

     Task task = userTasks[userId][taskId];
     task.Status = TaskStatus.Complete;
   }


   private enum TaskStatus
   {
     Incomplete,
     Complete
   }

 }
```