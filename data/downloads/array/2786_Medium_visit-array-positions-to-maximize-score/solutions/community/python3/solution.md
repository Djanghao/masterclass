# ✅Beats 100%✅ || C++ || PYTHON || Beginner Friendly🔥🔥🔥

**Author:** Its_AK7
**Votes:** 8
**Link:** [https://leetcode.com/problems/visit-array-positions-to-maximize-score/solutions/3820254/](https://leetcode.com/problems/visit-array-positions-to-maximize-score/solutions/3820254/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The given problem requires maximizing the score by picking elements from the vector 'nums' based on specific rules. We can do that by picking up all the elements one by one and checking if the element that we picked up increases or decreases the score. If it increases the score, then we take it; otherwise, we leave it.

# Approach
<!-- Describe your approach to solving the problem. -->
1. The main function `maxScore` initializes a few variables, including `p`, which represents the `parity` of the first element in the nums array`(0 for even and 1 for odd)`. It also creates a 2D memoization table,`dp`, to store previously computed results for subproblems.

2. The function solve is a recursive helper function that takes several parameters :
- `nums`: The original vector of integers.
- `x`: The value to subtract from an odd number when choosing from the end.
- `i`: The current index in the nums vector.
- `p`: The parity of the last element chosen (0 for even and 1 for odd).
- `dp`: The memoization table.
- The base case of the recursion is when the index i goes beyond the bounds of the nums array. In such a scenario, the function returns 0, as there are no more elements to consider.

3. Before performing any computations, the function checks if the result for the current `subproblem (i, p)` exists in the memoization table `dp`. If it does, the function directly returns the precomputed result, avoiding redundant calculations.

1. The function proceeds to calculate the maximum score for two scenarios:
- `Picking` the current element at index `i` and updating `p` accordingly. The score will depend on whether `p` and the` parity of nums[i]` are the same or not.
- `Skipping` the current element and moving to the next index.
The function recursively calls itself with updated parameters for both cases and stores the maximum of the two results.

After the recursive computation, the function stores the result for the current `subproblem (i, p)` in the memoization table `dp`.

Finally, the `maxScore` function calls `solve` with initial parameters to compute the maximum score, and then returns the maximum score plus the value of the first element (`nums[0]`) in the array. 

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(2*n) =>$$ $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```C++ []

class Solution {
public:
    long long solve(vector<int>& nums, int x,int i,int p,vector<vector<long long>>& dp){
        if(i>nums.size()-1)
            return 0;
        
        if(dp[i][p]!=-1){
            return dp[i][p];
        }
        
        long long include,exculde;
        int y=nums[i]%2;
        if(p==y)
            include=nums[i]+solve(nums,x,i+1,y,dp);
        else
            include=nums[i]-x+solve(nums,x,i+1,y,dp);
        
        exculde=solve(nums,x,i+1,p,dp);
        
        return dp[i][p]=max(include,exculde);
    }
    long long maxScore(vector<int>& nums, int x) {
        int p=nums[0]%2;
        int n=nums.size();
       
        vector<vector<long long>> dp(n,vector<long long>(2,-1));
        return nums[0]+solve(nums,x,1,p,dp);
    }
};
```
```python3 []
class Solution:
    def solve(self, nums, x, i, p, dp) -> int:
        if i > len(nums) - 1:
            return 0

        if dp[i][p] != -1:
            return dp[i][p]

        y = nums[i] % 2
        if p == y:
            include = nums[i] + self.solve(nums, x, i + 1, y, dp)
        else:
            include = nums[i] - x + self.solve(nums, x, i + 1, y, dp)

        exculde = self.solve(nums, x, i + 1, p, dp)

        dp[i][p] = max(include,exculde)
        return dp[i][p]

    def maxScore(self, nums: List[int], x: int) -> int:
        p = nums[0] % 2
        n = len(nums)
        dp = [[-1 for _ in range(2)] for _ in range(n)]
        return nums[0] + self.solve(nums, x, 1, p, dp)
```
**If you have found my solution helpful, I would sincerely appreciate your Upvote.**

