# Multiple Ruby solutions using Recursion

**Author:** ksodha93
**Votes:** 0
**Link:** [https://leetcode.com/problems/predict-the-winner/solutions/4285311/](https://leetcode.com/problems/predict-the-winner/solutions/4285311/)

---

Using Memoized Recursion
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n ^ 2)

- - Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n ^ 2)

# Code
Based on Minimax Game theory
```
# @param {Integer[]} nums
# @return {Boolean}
def predict_the_winner(nums)
    n = nums.length
    @nums = nums
    @dp = Array.new(n) { Array.new(n, -1) } 
    max_diff(0, n - 1) >= 0 # we care about the total score and scores for player 1 and 2, hence, >= 0.
end

def max_diff(left, right)
    return 0 if left > right

    return @dp[left][right] if @dp[left][right] != -1

    # maximize player 1 and implying minimizing player 2 score. Hence, nums - dfs
    # When we decide to pick from left side of the array: player 1 score - player 2 score
    left_score = @nums[left] - max_diff(left + 1, right)
    # When we decide to pick from right side of the array: player 1 score - player 2 score
    right_score = @nums[right] - max_diff(left, right - 1)
    @dp[left][right] = [left_score, right_score].max
    @dp[left][right]
end
```
Using Recursion
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(2 ^ n) -> since at each step we have 2 options of picking left or right.

- - Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
# @param {Integer[]} nums
# @return {Boolean}
def predict_the_winner(nums)
    @nums = nums
    max_diff(0, nums.length - 1) >= 0 # we care about the total score and scores for player 1 and 2, hence, >= 0.
end

def max_diff(left, right)
    return 0 if left > right

    left_score = @nums[left] - max_diff(left + 1, right)
    right_score = @nums[right] - max_diff(left, right - 1)

    [left_score, right_score].max
end
```