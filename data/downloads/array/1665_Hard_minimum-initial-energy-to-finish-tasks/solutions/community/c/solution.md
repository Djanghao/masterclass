# C++ | easy solution using sorting

**Author:** sekhar179
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/solutions/952189/](https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/solutions/952189/)

---

https://www.youtube.com/watch?v=CgaYzm3s1SU

The minimum energy required will be >= total energy of all tasks + some additional energy required for the tasks having "minimum energy" requirement >= actual energy requirement.
so "total enery of all tasks" <= answer <= "total minimum energy of all tasks"
Key points:
1. To minimize the answer we need to process the tasks which have more gap between their actual and minimum energy requirement.
2. Sort all these tasks accoring to the above ordering
3. Calculate total energy of all tasks and start processing with this energy
4. Add additional energy to answer wherever the minimum requirement is not satisfied using current total energy
```
class Solution {
public:
    static bool mysort(vector<int> &a, vector<int> &b) {
        return (a[1] - a[0]) > (b[1] - b[0]);
    }
    int minimumEffort(vector<vector<int>>& tasks) {
        sort(tasks.begin(), tasks.end(), mysort);
        int total = 0;
        for (auto task: tasks)
            total += task[0];
        int res = total;
        for (auto task: tasks) {
            if (task[1] > total) // If the tasks minimum requirement is more than current total energy
                total += task[1] - total; // Add the additional energy required to the total 
            total -= task[0];
        }
        return res + total;
    }
};
```