# C++ DP Approach Explained using an Example

**Author:** jayanth_j737
**Votes:** 4
**Link:** [https://leetcode.com/problems/paint-house/solutions/803895/](https://leetcode.com/problems/paint-house/solutions/803895/)

---

This question is a good example to discuss the space complexity which could be kept to minimal by making use of the existent 2D grid to find the solution using a O(n) Dp approach.

```
class Solution {
public:
    int minCost(vector<vector<int>>& costs) 
    {
        if(costs.empty())
            return 0;
        
        for(int i=1; i<costs.size();i++)
        {
            costs[i][0]+=min(costs[i-1][1], costs[i-1][2]);
            costs[i][1]+=min(costs[i-1][0], costs[i-1][2]);
            costs[i][2]+=min(costs[i-1][1], costs[i-1][0]);
        }
        return min(costs[costs.size()-1][0], min(costs[costs.size()-1][1], costs[costs.size()-1][2]));
    }
};
```
Instead of using the same 2D grid we could makle use of a 2D Vector
 ``` 
vector<vector<int>> dp(n, vector<int>(3, 0)) // 3 = number of columns, and 0 = initial value
```

Now, talking about the approach, for instance take the input vector as,
```
vector<vector<int>> costs; 
// 17 2  17
// 16 16 5
// 14 3  19
```
The following grid after first iteration using the given approach using DP(note that we start from the indexed 1 row).
```
// 17 2  17
// 18 33 7
// 14 3  19
```
And after the final iteration,
```
// 17 2 17
// 18 33 7
// 21 10 26
```

Finally we return the lowest value from the last row, here being ```10```.

Hoping that the approach is clear to anyone coming through the post.
