# recursive DFS with Map

**Author:** kineo
**Votes:** 0
**Link:** [https://leetcode.com/problems/time-needed-to-inform-all-employees/solutions/4348625/](https://leetcode.com/problems/time-needed-to-inform-all-employees/solutions/4348625/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
    int time = 0;
    // data structure
    Map tree = <int,List<int>>{};
    List<int> timeTable = [];

    int numOfMinutes(int n, int headID, List<int> manager, List<int> informTime) {
        timeTable = informTime;
        for (int i = 0; i < manager.length; i++) {
            int directManager = manager[i];
            if (tree.containsKey(directManager)) {
                var employees = tree[directManager];
                employees.add(i);
                tree[directManager] = employees;
            } else {
                tree[directManager] = [i];
            }
        }
        dfs(tree[-1].first, 0);
        return time;
    }

    dfs(int employee, int totalTime) {
        totalTime += timeTable[employee];
        // stop condition
        if (tree[employee] == null) {
            time = max(time, totalTime);
            return;
        }

        for (employee in tree[employee]) {
            dfs(employee, totalTime);
        }
    }
}
```