# easy c++ solution |beats 100 % runtime|🔥🔥

**Author:** sarthakgoel84
**Votes:** 8
**Link:** [https://leetcode.com/problems/k-th-nearest-obstacle-queries/solutions/5718216/](https://leetcode.com/problems/k-th-nearest-obstacle-queries/solutions/5718216/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    vector<int> resultsArray(vector<vector<int>>& queries, int k) {
        vector<int>ans(queries.size(),-1);
        priority_queue<int>dist;
        for(int i=0;i<queries.size();i++){
            int curr=abs(queries[i][0])+abs(queries[i][1]);
            dist.push(curr);
            if(dist.size()>k){
                dist.pop();
            }
           if(dist.size()==k){
            ans[i]=dist.top();
           }
        }
            return ans;
        }
};
```