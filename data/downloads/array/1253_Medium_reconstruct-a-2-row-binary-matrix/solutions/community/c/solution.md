# C++ Simple Explanation

**Author:** physics_alpaca
**Votes:** 8
**Link:** [https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/solutions/1190318/](https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/solutions/1190318/)

---

This problem can be solved using a greedy approach. We can iterate through each column and determine how we assign values to the upper cell and lower cell based on `colsum[i]`.

We can break down the greedy decision into 3 cases:

1. `colsum[i]==0`
We don't do anything in this case, clearly both upper and lower cells are 0.

2. `colsum[i]==2`
We set both upper and lower cells to 1 and decrement both upper and lower.

3. `colsum[i]==1`
Either the upper or lower cell is a 1. We make the choice based on whichever is larger - upper or lower. The intuition behind assigning the 1 to the larger quantity is to balance them out in anticipation for Case 2. Think about it this way: we only benefit by assigning in this manner. Suppose after we make this choice we only encounter Case 1 and 3, then it wouldn't matter the way we assigned the 1. However, if we instead encounter many instances of Case 2, we could end up having an invalid solution if upper and lower aren't balanced, as we'd be decrementing both of them at the same time.

Here's a sample input. Try going through it by not balancing upper and lower vs. balancing upper and lower. You can imagine not balancing as always assigning to upper until upper = 0, then assigning to lower. 
```
5
5
[2,1,2,0,1,0,1,2,0,1]
```

After iterating through each column, we have to validate that both upper and lower are exactly 0. It's most convenient to perform this check outside the loop as if we'd put this check inside the loop, we could only check the case where either upper or lower is less than 0.

C++ code:
```
class Solution {
public:
    vector<vector<int>> reconstructMatrix(int upper, int lower, vector<int>& colsum) {
        vector<vector<int>> ans(2, vector<int>(colsum.size()));
        for (int i=0; i<colsum.size(); ++i) {
            if (colsum[i]==2) {
                ans[0][i]=1;
                ans[1][i]=1;
                --upper;
                --lower;
            }
            else if (colsum[i]==1) {
                if (upper>lower) {
                    ans[0][i]=1;
                    --upper;
                }
                else {
                    ans[1][i]=1;
                    --lower;
                }
            }
        }
        if (upper!=0 || lower!=0) return {};
        return ans;
    }
};
```

Time complexity: O(n)
Space complexity: O(n)