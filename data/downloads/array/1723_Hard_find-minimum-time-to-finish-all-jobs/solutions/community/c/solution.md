# C++ Binary Search 4ms

**Author:** gjz14
**Votes:** 26
**Link:** [https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/solutions/1014262/](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/solutions/1014262/)

---

Similar to this question: https://leetcode.com/problems/partition-to-k-equal-sum-subsets/
We can translate this question to:

Verify a given working time limit for every worker, so that all the jobs can be successfully assigned. 
We need to find the min possible solution of the above working time limit.

Obviously, every worker has to be assigned for at least one job, so the lower bound is the most time consuming job
and the upper bound can be set to the sum of all jobs. Then we can do a binary search on working time limit.

We use dfs to verify whether a working time limit is valid, the idea is almost the same as  https://leetcode.com/problems/partition-to-k-equal-sum-subsets/

```
class Solution {
public:
    int minimumTimeRequired(vector<int>& jobs, int k) {
        int sum = 0;
        for(int j:jobs)
            sum += j;
        sort(jobs.begin(),jobs.end(),greater<int>());
        int l = jobs[0], r = sum;
        while(l<r){
            int mid = (l+r)>>1;
            vector<int> worker(k,0);
            if(dfs(jobs,worker,0,mid))
                r = mid;
            else
                l = mid + 1;
        }
        return l;
    }
    bool dfs(vector<int>& jobs, vector<int>& worker, int step, int target){
        if(step>=jobs.size())
            return true;
        int cur = jobs[step];
        // assign cur to worker i 
        for(int i=0;i<worker.size();i++){
            if(worker[i] + cur <= target){
                worker[i] += cur;
                if(dfs(jobs,worker,step+1,target))
                    return true;
                worker[i] -= cur;
            }
            if(worker[i]==0)
                break;
        }
        return false;
    }
};
```