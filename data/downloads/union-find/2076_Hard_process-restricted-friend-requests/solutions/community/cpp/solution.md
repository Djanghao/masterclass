# [C++] Simple C++ Code || 90% time || union find

**Author:** _pros_
**Votes:** 4
**Link:** [https://leetcode.com/problems/process-restricted-friend-requests/solutions/2458609/](https://leetcode.com/problems/process-restricted-friend-requests/solutions/2458609/)

---


# **If you like the implementation then Please help me by increasing my reputation. By clicking the up arrow on the left of my image.**
```
class Solution {
    vector<int> parents;
    int find_set(int v)
    {
        if(v == parents[v])
            return v;
        return parents[v] = find_set(parents[v]);
    }
    void union_set(int a, int b)
    {
        a = find_set(a);
        b = find_set(b);
        if(a == b)
            return;
        if(a != b)
            parents[b] = a;
        return;
    }
public:
    vector<bool> friendRequests(int n, vector<vector<int>>& restrictions, vector<vector<int>>& requests) {
        for(int i = 0; i < n; i++)
            parents.push_back(i);
        vector<bool> ans;
        for(vector<int> &req : requests)
        {
            int v = 1;
            int a = find_set(req[0]);
            int b = find_set(req[1]);
            for(vector<int> &res : restrictions)
            {
                int r1 = find_set(res[0]);
                int r2 = find_set(res[1]);
                if((a == r1 && b == r2) || (b == r1 && a == r2))
                {
                    v = 0;
                    break;
                }
            }
            ans.push_back(v);
            if(v)
            {
                union_set(a,b);
            }
        }
        return ans;
    }
};
```