# [Python3] O(NlogN) Greedy solution + explanation

**Author:** pipiLongstocking
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/solutions/5320465/](https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/solutions/5320465/)

---

# Intuition
The problem requires determining the maximum number of consecutive integer values that can be made using the given coins, starting from 0. The key observation here is that if we can create all values up to a certain integer `x`, and the next coin has a value less than or equal to `x`, then we can extend the range of consecutive values we can create.

# Approach
1. **Sort the Coins**: Start by sorting the coins in ascending order. This allows us to iteratively build the range of consecutive sums in a structured manner.
  
2. **Initialize**: Initialize `next_coin` to 1. This variable represents the smallest value that we cannot currently form with the given subset of coins.

3. **Iterate Through Coins**: Iterate through each coin:
   - If the value of the coin is less than or equal to `next_coin`, it means we can use this coin to extend our range of consecutive sums.
   - Update `next_coin` by adding the value of the current coin. This extends the range of consecutive sums we can form.

4. **Break Condition**: If a coin's value is greater than `next_coin`, break the loop as we can no longer form consecutive sums with the remaining coins.

5. **Return Result**: The value of `next_coin` after the loop completes will be the maximum number of consecutive integers that can be formed.

# Complexity
- Time complexity: $$O(n \\log n)$$
  - Sorting the coins takes $$O(n \\log n)$$ time.
  - Iterating through the coins takes $$O(n)$$ time.
  
- Space complexity: $$O(1)$$
  - Only a few variables are used, regardless of the input size.

# Code
```python
class Solution:
    def getMaximumConsecutive(self, coins: List[int]) -> int:
        coins.sort()
        next_coin = 1
        for coin in coins:
            if next_coin - coin < 0: 
                break
            next_coin += coin
        return next_coin
