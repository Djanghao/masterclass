# It's an easy question!

**Author:** Shrikanta8
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/solutions/3892152/](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/solutions/3892152/)

---

# Code
```
class Solution {
public:
    int minimumTime(vector<int>& jobs, vector<int>& workers) {
        sort(jobs.begin(),jobs.end());
        sort(workers.begin(),workers.end());

        int ans=0,n=jobs.size(),task;
        for(int i=0;i<n;i++){
            task=ceil(jobs[i]*1.0/workers[i]);
            ans=max(ans,task);
        }
        return ans;
    }
};

```