# Very Simple Solution || PHP || 100% Beats

**Author:** thush_leet
**Votes:** 0
**Link:** [https://leetcode.com/problems/task-scheduler/solutions/4915673/](https://leetcode.com/problems/task-scheduler/solutions/4915673/)

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
class Solution {

    /**
     * @param String[] $tasks
     * @param Integer $n
     * @return Integer
     */
    function leastInterval($tasks, $n) {
        
        $taskCounts = array_count_values($tasks);
        $maxFrequency = max($taskCounts);
        $maxFreqTasks = count(array_filter($taskCounts, function($freq) use ($maxFrequency) {
            return $freq == $maxFrequency;
        }));

        $partCount = $maxFrequency - 1;
        $partLength = $n - ($maxFreqTasks - 1);
        $emptySlots = $partCount * $partLength;
        $availableTasks = count($tasks) - $maxFrequency * $maxFreqTasks;
        $idles = max(0, $emptySlots - $availableTasks);

        return count($tasks) + $idles;
    }
}
```