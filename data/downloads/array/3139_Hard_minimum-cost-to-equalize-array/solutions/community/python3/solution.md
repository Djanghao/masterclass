# Binary Search on Piecewise Linear Function

**Author:** jeffreyhu8
**Votes:** 39
**Link:** [https://leetcode.com/problems/minimum-cost-to-equalize-array/solutions/5113640/](https://leetcode.com/problems/minimum-cost-to-equalize-array/solutions/5113640/)

---

# Intuition
One approach is to first find the value that we should make all the array elements equal to, then find the cost of doing that.

However, directly finding a formula for the optimal value is not trivial. For example, the optimal value may not always be `max(nums)`, as shown by the case `nums = [1, 100_000, 100_000], cost1 = 1_000_000, cost2 = 1`.

As such, instead of trying to directly find the optimal value, we will instead do a search over the space of all possible values to find the one with minimal cost.

# Approach
First, if `2 * cost1 < cost2`, then it never makes sense to take two at a time. So set `cost2 = 2 * cost1` and whenever we take two at a time, pretend that we are just taking one at a time twice.

Now that we've set `cost2 = min(2 * cost1, cost2)`, our goal in achieving some value `k` is to minimize the number of times we take one at a time (since taking two elements at a time is always better than taking both separately now that we've updated our cost).

So how many elements do we need to pick up one at a time? Let `differences = [k - num for num in nums]`. If `max(differences)` is less than the sum of the other elements, then we can use a heap/priority queue argument to show that we can pair all elements up, except maybe one element if the parity is not right. Otherwise, pair as many elements in `max(differences)` up as possible, then take the remaining `max(differences) - (sum(differences) - max(differences))` elements one at a time.

Moreover, disregarding the adjustment of `ones` due to parity, note that `ones := max(2 * max(differences) - sum(differences), 0)` is really a piecewise function with two linear parts. Thus, `ones * self.cost1 + ((sum(differences) - ones) // 2) * self.cost2` is also a piecewise function with two linear parts that decreases then increases.

So, do a binary search on both parities to find the minimum.

# Complexity
- Time complexity: $$O(n + \\lg \\mathrm{sum}(\\mathrm{nums}))$$

- Space complexity: $$O(1)$$

# Code
```py
class Solution:
    MOD = 10 ** 9 + 7
    
    def solve(self, k):
        sumDifferences = k * len(self.nums) - self.sumNums
        
        ones = max(2 * (k - self.minNums) - sumDifferences, 0)        
        if (sumDifferences - ones) & 1 != 0:
            ones += 1
        
        return ones * self.cost1 + ((sumDifferences - ones) // 2) * self.cost2
    
    def minCostToEqualizeArray(self, nums: List[int], cost1: int, cost2: int) -> int:
        cost2 = min(2 * cost1, cost2)
        
        self.nums = nums
        self.minNums = min(nums)
        self.sumNums = sum(nums)
        self.cost1 = cost1
        self.cost2 = cost2
        
        m = max(nums)
        
        sameParity = range(m, 10 ** 18, 2)
        diffParity = range(m + 1, 10 ** 18, 2)
        i = bisect_left(sameParity, 0, key=lambda i: self.solve(i + 2) - self.solve(i))
        j = bisect_left(diffParity, 0, key=lambda j: self.solve(j + 2) - self.solve(j))
        
        return min(self.solve(sameParity[i]), self.solve(diffParity[j])) % Solution.MOD
```