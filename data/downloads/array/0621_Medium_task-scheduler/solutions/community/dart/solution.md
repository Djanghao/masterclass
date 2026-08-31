# Dart Simple Solution

**Author:** Fady_Fouad
**Votes:** 1
**Link:** [https://leetcode.com/problems/task-scheduler/solutions/4895900/](https://leetcode.com/problems/task-scheduler/solutions/4895900/)

---

<!-- # Intuition -->
<!-- Describe your first thoughts on how to solve this problem. -->

<!-- # Approach -->
<!-- Describe your approach to solving the problem. -->

<!-- # Complexity -->
<!-- - Time complexity: -->
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

<!-- - Space complexity: -->
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import 'dart:collection';

class Solution {
  int leastInterval(List<String> tasks, int n) {
     // Count the occurrences of each task
    var taskCounts = SplayTreeMap<String, int>();
    for (var task in tasks) {
        taskCounts.update(task, (value) => value + 1, ifAbsent: () => 1);
    }

    // Find the maximum occurrence and the number of tasks with this occurrence
    int maxCount = taskCounts.values.reduce((a, b) => a > b ? a : b);
    int maxCountTasks = taskCounts.values.where((c) => c == maxCount).length;

    // Calculate the minimum intervals required
    int minTime = (maxCount - 1) * (n + 1) + maxCountTasks;
    return max(minTime, tasks.length);
  }
}
```