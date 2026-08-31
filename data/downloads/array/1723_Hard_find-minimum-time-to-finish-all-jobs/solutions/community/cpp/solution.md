# [C++] Simple C++ Code

**Author:** _pros_
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/solutions/2438422/](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/solutions/2438422/)

---


# **If you like the implementation then Please help me by increasing my reputation. By clicking the up arrow on the left of my image.**
```
class Solution {
    static bool comp(int &a, int &b)
    {
        return a > b;
    }
    int ans = INT_MAX;
    void dfs(vector<int> &vis, int idx, vector<int> &jobs, int k)
    {
        if(idx == jobs.size())
        {
            int val = 0;
            for(int i = 0; i < k; i++)
            {
                val = max(val, vis[i]);
            }
            ans = min(ans,val);
            return;
        }
        for(int i = 0; i < k; i++)
        {
            if(i > 0 && vis[i] >= vis[i - 1])
                continue;
            if(vis[i]+jobs[idx] >= ans)
                continue;
            vis[i] += jobs[idx];
            dfs(vis, idx+1, jobs, k);
            vis[i] -= jobs[idx];
        }
        return;
    }
public:
    int minimumTimeRequired(vector<int>& jobs, int k) {
        sort(jobs.begin(), jobs.end(), comp);
        vector<int> vis(k+1,0);
        dfs(vis, 0, jobs, k);
        return ans;
    }
};
```