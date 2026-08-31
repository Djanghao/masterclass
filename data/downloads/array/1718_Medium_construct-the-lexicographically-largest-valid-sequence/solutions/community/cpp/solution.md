# [C++] Simple C++ Code || 80% time

**Author:** _pros_
**Votes:** 8
**Link:** [https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/solutions/2446102/](https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/solutions/2446102/)

---


# **If you like the implementation then Please help me by increasing my reputation. By clicking the up arrow on the left of my image.**
```
class Solution {
    int m;
    bool dfs(int idx, int n, int bitmap, vector<int> &ans)
    {
        if(idx == m)
            return true;
        if(ans[idx] != 0)
            return dfs(idx+1, n, bitmap, ans);
        for(int i = n; i > 0; i--)
        {
            if(bitmap & (1 << i)) continue;
            ans[idx] = i;
            if(i == 1)
            {
                if(dfs(idx+1, n, bitmap | (1 << i), ans))
                    return true;
            }       
            else if(idx+i < m && ans[idx+i] == 0)
            {
                ans[idx+i] = i;
                if(dfs(idx+1, n, bitmap | (1 << i), ans))
                    return true;
                ans[idx+i] = 0;
            }
            ans[idx] = 0;
        }
        return false;
    }
public:
    vector<int> constructDistancedSequence(int n) {
        m = 2*n-1;
        vector<int> ans(m, 0);
        dfs(0,n,0, ans);
        return ans;
    }
};
```