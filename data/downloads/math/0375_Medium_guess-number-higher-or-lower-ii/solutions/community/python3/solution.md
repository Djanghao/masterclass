# [Python] DP, beat 97.52% in time, 99% in memory (with explanation)

**Author:** wingskh
**Votes:** 35
**Link:** [https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/1510747/](https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/1510747/)

---

**Appreciate if you could upvote this solution**

Case 1: `n is odd`
Selected nums = [2, 4, 6, ..., n-1]

Case 2: `n is even`
Selected nums = [1, 3, 5, ..., n-1]

The basic idea is that if we want to guess the right number, the maximum number of guessing time should be k = floor(n/2) which means we can find out the right number just using the k nums.

For example, 
When n = 5,  k = floor(5/2) = 2
we can find out the right number by guessing 2 and 4 as 2 can classify [1, 2, 3] and 4 and classify [3, 4, 5]
```
1  2  3  4  5
   2     4
```
When n = 6,  k = floor(6/2) = 3
we can find out the right number by guessing 1,  3 and 5 as they can classify [1, 2], [2, 3, 4] and [4, 5, 6] respectively 
```
1  2  3  4  5  6
1     3     5
```

Thus, we can use the selected nums to find out the minimum amount of money and the execution time will be reduced by half.
In the dp matrix, the row means the starting index and the col means the ending index.
At the beginning, the dp[i][i] is assignmed as selected_nums[i] because selected_nums[i] is the smallest cost to classify the nums in [selected_nums[i] - 1, selected_nums[i], selected_nums[i] + 1].
After the initialization, the problem will become an easy dp question, just finding the optimal solution from length 2 to length k.

```python
class Solution:
    def getMoneyAmount(self, n: int) -> int:
        if n == 1:
            return 1
        starting_index = 1 if n % 2 == 0 else 2
        selected_nums = [i for i in range(starting_index, n, 2)]
        selected_nums_length = len(selected_nums)
        dp = [[0] * selected_nums_length for _ in range(selected_nums_length)]

        for i in range(selected_nums_length):
            dp[i][i] = selected_nums[i]

        for length in range(2, selected_nums_length + 1):
            for i in range(selected_nums_length - length + 1):
                j = i + length - 1
                dp[i][j] = float("inf")
                for k in range(i, j + 1):
                    dp_left = dp[i][k - 1] if k != 0 else 0
                    dp_right = dp[k + 1][j] if k != j else 0
                    dp[i][j] = min(dp[i][j], selected_nums[k] + max(dp_left, dp_right))

        return dp[0][-1]
```