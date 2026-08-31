# Simple and Very Short Solution

**Author:** BrehamPie
**Votes:** 7
**Link:** [https://leetcode.com/problems/cycle-length-queries-in-a-tree/solutions/2923504/](https://leetcode.com/problems/cycle-length-queries-in-a-tree/solutions/2923504/)

---

# Approach
<!-- Describe your first thoughts on how to solve this problem. -->
We need to find the distance between two nodes and add 1 with it to find the answer.

Now how do we find the distance? We can just pull each node up till they meet. As the the tree is a binary tree we can complete the task in logarithmic time.

At each step we will pull the node with higher value. As described in the problem the parent of any node with value <b>u</b> will be <b>floor(u/2)</b>


# Complexity
- Time complexity: O(mlog(N))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    vector<int> cycleLengthQueries(int n, vector<vector<int>>& q) {
        vector<int>ans;
        for(auto&u:q){
            int a = u[0], b = u[1];
            int d = 0;
            while(a!=b){
                if(b>a) b/=2;
                else a/=2;
                d++;
            }
            ans.push_back(d+1);
        }
        return ans;
    }
};
```