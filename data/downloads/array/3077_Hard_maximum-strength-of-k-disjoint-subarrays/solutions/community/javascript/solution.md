# C++ || Python || Javascript ||  DP solution ||  Solution and Explanation ✅✅

**Author:** kumarritul089
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-strength-of-k-disjoint-subarrays/solutions/4864589/](https://leetcode.com/problems/maximum-strength-of-k-disjoint-subarrays/solutions/4864589/)

---

# Intuition
The problem seems to involve dynamic programming, where we need to find the maximum strength that can be obtained by choosing elements from the array 'nums' under certain conditions.

# Approach
The approach is to use dynamic programming to keep track of the maximum strength achievable at each step. We'll define a function `solve()` that takes parameters `i` (current index), `k` (remaining operations), `started` (whether we have started a subsequence), and the array `nums`. We'll use a 3D dp array `dp` to memoize the results.

- Base Cases:
  - If `k` becomes 0, we return 0 as there are no more operations left.
  - If `i` reaches the end of the array `nums`, we check if `k` is 1 and if we have started a subsequence. If both conditions are met, we return 0; otherwise, we return a very large negative value to signify that this state is not valid.

- If the current state `(i, k, started)` is already computed, we return the stored result from the dp array.

- We initialize the answer `ans` with a very large negative value.

- If `started` is true, it means we have started a subsequence. In this case, we can choose to continue the current subsequence or start a new one. We update `ans` accordingly.

- If `started` is false, it means we haven't started any subsequence yet. In this case, we only have the option to start a new subsequence.

- Finally, we store the result in the dp array and return `ans`.

In the `maximumStrength()` function, we initialize the dp array and call the `solve()` function with initial parameters.

# Complexity
- Time complexity: \\(O(n \\cdot k)\\) where \\(n\\) is the size of the array `nums` and \\(k\\) is the number of operations.
- Space complexity: \\(O(n \\cdot k)\\) for the dp array.

# Code
```C++ []
class Solution {
public:
    vector<vector<vector<long long>>> dp;
    long long solve(int i, long long k, bool started, vector<int> &nums){
        if(k == 0) return 0;

        if(i == nums.size()){
            if(k == 1 && started) return 0;
            return -1e15;
        }
        if(dp[i][k][started] != -1e16) return dp[i][k][started];

        long long ans = -1e15;
        
        if(started)
            ans = solve(i, k - 1, false, nums);
        
        ans = max((k % 2 == 0 ? -1 : 1) * k * nums[i] + solve(i + 1, k, true, nums), ans);
        
        if(!started)
            ans = max(solve(i + 1, k, false, nums), ans);
        
        return dp[i][k][started] = ans;
    }
    long long maximumStrength(vector<int>& nums, int k) {
        dp = vector<vector<vector<long long>>> (nums.size(), vector<vector<long long>> (k + 1, vector<long long> (2, -1e16)));
        long long ans = -1e15;
        return solve(0, (long long)k, false, nums);
    }
};
```
```javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumStrength = function(nums, k) {
    const n = nums.length;
    const small = -Infinity; // initial value as not visited
    const dp = new Array(n).fill(0).map(el=>new Array(2).fill(0).map(el=>new Array(k+1).fill(small)))
    function helper(i, g, x) {
        if(g === 0) {
            return 0;
        }
        if(i === n) {
            // if current is selected and this is the last 1 group
            if(g===1 && x===1) {
                return 0;
            }
            return -Math.pow(10, 15);
        }
        if(dp[i][x][g] != small) {
            // if previous visited, return the cached value.
            return dp[i][x][g];
        }
        const bit = g % 2 === 0 ? -1 : 1;

        // case1: select i element  = (create a new sub) OR (include i into current)
        const res1 = Math.max(helper(i+1, g-1, 0),helper(i+1, g, 1))  + nums[i] * bit * g;
        
        // case2: doesn't select i
        const res2 = (x===0)  ? helper(i+1, g, 0) : small;
        const res = Math.max(res1, res2);
        dp[i][x][g] = res;
        return res;
    }

    return helper(0,k,0);
};
```
```python []
class Solution:
    def maximumStrength(self, nums, k):
        dp = [[[-1e16 for _ in range(2)] for _ in range(k + 1)] for _ in range(len(nums))]
        
        def solve(i, k, started, nums):
            if k == 0:
                return 0
            
            if i == len(nums):
                if k == 1 and started:
                    return 0
                return -1e15
            
            if dp[i][k][started] != -1e16:
                return dp[i][k][started]
            
            ans = -1e15
            
            if started:
                ans = solve(i, k - 1, False, nums)
                
            ans = max((-1 if k % 2 == 0 else 1) * k * nums[i] + solve(i + 1, k, True, nums), ans)
            
            if not started:
                ans = max(solve(i + 1, k, False, nums), ans)
                
            dp[i][k][started] = ans
            return ans
        
        return solve(0, k, False, nums)

```


