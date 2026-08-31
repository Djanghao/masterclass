# DP, Fast & Concise

**Author:** zsq007
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-hamming-distances/solutions/5132207/](https://leetcode.com/problems/maximum-hamming-distances/solutions/5132207/)

---

# Intuition
For each element `0 <= i < 2**m`, `dp[i]` stores the maximal distance from `i` to any `num` in `nums`.

At each level, the maximal distance for each number will be the greater of the current distance, or the distance of its counterpart `num ^ (1<<bit)` plus one.

For example, `dp[xxx0101]` will be the maximum of `dp[xxx0101] + 0` and `dp[xxx1101] + 1`.

# Complexity
- Time complexity: $O(m \\cdot 2^m)$

- Space complexity: $O(2^m)$

# Code
```python [Python3]
class Solution:
    def maxHammingDistances(self, nums: List[int], m: int) -> List[int]:
        dp = [-inf] * (1<<m)
        for num in nums:
            dp[num] = 0
        
        for bit in range(m):
            prev = dp[:] 
            for num in range(1<<m):
                dp[num] = max(dp[num], prev[num ^ (1<<bit)] + 1)

        return [dp[num] for num in nums]
```
```c++ [C++]
class Solution {
public:
    vector<int> maxHammingDistances(vector<int>& nums, int m) {
        int size = 1 << m;
        vector<int> dp(size, INT_MIN);
        vector<int> res;

        for (int num : nums) dp[num] = 0;

        for (int bit = 0; bit < m; bit++) {
            vector<int> prev(dp);
            for (int num = 0; num < size; num++)
                dp[num] = max(dp[num], prev[num ^ (1 << bit)] + 1);
        }

        for (int num : nums)
            res.push_back(dp[num]);

        return res;
    }
};
```
```java [Java]
public class Solution {
    public int[] maxHammingDistances(int[] nums, int m) {
        int size = 1 << m;
        int[] dp = new int[size];
        int[] res = new int[nums.length];
        Arrays.fill(dp, Integer.MIN_VALUE);
        
        for (int num : nums) dp[num] = 0;

        for (int bit = 0; bit < m; bit++) {
            int[] prev = dp.clone();
            for (int num = 0; num < size; num++) 
                dp[num] = Math.max(dp[num], prev[num ^ (1 << bit)] + 1);
        }

        for (int i = 0; i < nums.length; i++)
            res[i] = dp[nums[i]];

        return res;
    }
}
```
A faster version for Python3 (~1300 ms): 
```python
class Solution:
    def maxHammingDistances(self, nums: List[int], m: int) -> List[int]:
        dp = [-inf] * (1<<m)
        for num in nums:
            dp[num] = 0
        
        for bit in range(m):
            d = 1<<bit
            for i in range(0,1<<m,d<<1):
                for j in range(i, i+d):
                    # dp[j], dp[j+d] = max(dp[j],dp[j+d]+1), max(dp[j+d],dp[j]+1)
                    if dp[j] < dp[j+d]:
                        dp[j] = dp[j+d]+1
                    elif dp[j] > dp[j+d]:
                        dp[j+d] = dp[j]+1
                    else:
                        dp[j] += 1
                        dp[j+d] += 1
                    
        return [dp[num] for num in nums]
```