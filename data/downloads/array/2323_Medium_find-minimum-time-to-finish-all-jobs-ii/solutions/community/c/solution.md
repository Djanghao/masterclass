# [C++] Sort & Greedy

**Author:** EricYXing
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/solutions/2215203/](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/solutions/2215203/)

---

```
class Solution {
public:
    int minimumTime(vector<int>& jobs, vector<int>& workers) {
        sort(jobs.begin(), jobs.end());
        sort(workers.begin(), workers.end());
        int n = jobs.size(), ans = 0;
        for (int i = 0; i < n; i++)
            ans = max(ans, (int)ceil((double)jobs[i] / workers[i]));
        return ans;
    }
};
```