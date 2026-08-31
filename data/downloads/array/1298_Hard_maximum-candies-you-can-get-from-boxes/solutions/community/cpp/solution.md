# Best C++ Easy to understand Solution 🔥🔥 | Fully Commented

**Author:** unknown_ajay
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/solutions/3710917/](https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/solutions/3710917/)

---

# Intuition : Just did what question said !
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach 
1.) Taken a queue to maintain current boxes that i have 
2.) Opening a box if i can open it else removing it from the queue and pushing it back again before next iteration 
3.) In case i am unable to open any box out of all the current boxes, then break because i cannot go any further 
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity :  $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity : $$O(n)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int maxCandies(vector<int>& status, vector<int>& val, vector<vector<int>>& keys, vector<vector<int>>& adj, vector<int>& start)
    {
        queue<int> q; vector<int> cani = status; 
        // can i denotes, can i open that box or not which is possible 
        // if i have key for that or it's status is 1 initially 

        for(auto it:start) q.push(it); // push all starting nodes 
        int ans = 0 ;
        while(!q.empty())
        {
            int sz = (int)q.size();
            vector<int> repush;
            for(int i=0;i<sz;i++)
            {
                int node = q.front(); // picking out the first element 
                if(cani[node])
                {
                    q.pop(); ans+=val[node]; // if i can open add it's value to answer 
                    for(auto p:keys[node]) cani[p]=1; // now i can open boxes for which i have keys 
                    for(auto it:adj[node]) q.push(it); // pushing reachable boxes 
                }else
                {
                    q.pop();
                    repush.push_back(node); // storing unable to open
                }
            }
            for(auto it:repush) q.push(it);
            if(repush.size()==sz) break;// None of the boxes can be opened
        }
        return ans; // returning answer 
    }
};
```