# Linear Scan

**Author:** SelfHelp
**Votes:** 7
**Link:** [https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/2681230/](https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/2681230/)

---

# Intuition
As the logs are already sorted accorign to the Leaving Time.
With a linear scan we can just comput the log with largest time and find the corrosponding min employee id.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
We  maintain a `last` variable which is initially `0` which stores the leaving time of last log.
`period = log[1] - last`
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: *`O(n)`*
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: *`O(1)`*
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int hardestWorker(int n, vector<vector<int>>& logs) {
        int last = 0, emp = 0, larg = 0, period;
        for(vector<int>& log: logs) {
            period = log[1] - last;
            if(larg == period)
                emp = min(emp, log[0]);
            else if(larg < period) {
                larg = period;
                emp = log[0];
            }
            last = log[1];
        }
        return emp;
    }
};
```