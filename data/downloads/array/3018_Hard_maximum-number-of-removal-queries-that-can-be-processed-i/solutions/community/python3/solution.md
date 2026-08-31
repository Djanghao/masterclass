# [Python 3]

**Author:** huangshan01
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-removal-queries-that-can-be-processed-i/solutions/4621723/](https://leetcode.com/problems/maximum-number-of-removal-queries-that-can-be-processed-i/solutions/4621723/)

---

Question changed from subarray to subsequence, now it makes sense.


Code accepted, but literally got me confused. 

According to the question description, we select `nums` or one of its non-empty subarrays, extracting numbers from either the front or the end, and the extracted sequence should be >= prefix of `queries`, and the length of the longest `prefix` is the answer.

I dont see the following example how one can process all 3 queries (LC expected answer). There is no subarray of nums able to form the query sequence of `[2,3,4]` given the stated processing steps. Leetcoders please help to explain me where I understand the problem wrong.

`nums = [2,1,4,1,3]`
`queries = [2,3,4]`

I placed a comment in the code that `dp[i][j] = max(dp[i - 1][j], dp[i][j + 1])` should be removed to get an answer of 2. 

For dp definition, beyond my level and I referred to the hints. `dp[i][j]` is the maximum number of queries processed with `nums[i to j, both inclusive]` not removed.

Transition is checking `nums[i]` and `nums[j]` against current query stored in `dp[i - 1][j]` and `dp[i][j + 1]`, respectively. Subequently increase the answer by 1 if number chosen is equal to or greater than the query.

Note that based on my definition, `dp[i][i]` will have `nums[i]` left unchecked. To get the final answer, add 1 if `nums[i] >= queries[dp[i][i]]`.

```
dp[i][j] = max(dp[i - 1][j], dp[i][j + 1])
if nums[i - 1] >= queries[dp[i - 1][j]]:
    dp[i][j] = max(dp[i][j], dp[i - 1][j] + 1)
if nums[j + 1] >= queries[dp[i][j + 1]]:
    dp[i][j] = max(dp[i][j], dp[i][j + 1] + 1)
```

# Code
```
class Solution:
    def maximumProcessableQueries(self, nums: List[int], queries: List[int]) -> int:
        m = len(queries)
        n = len(nums)
        dp = [[0] * (n + 1) for _ in range(n + 1)]
        nums += [-1]
        ans = 0
        
        for d in range(n - 1, -1, -1):
            for i in range(n):
                j = i + d
                if j < n:
                    dp[i][j] = max(dp[i - 1][j], dp[i][j + 1])
                    if nums[i - 1] >= queries[dp[i - 1][j]]:
                        dp[i][j] = max(dp[i][j], dp[i - 1][j] + 1)
                    if nums[j + 1] >= queries[dp[i][j + 1]]:
                        dp[i][j] = max(dp[i][j], dp[i][j + 1] + 1)
                    if dp[i][j] == m:
                        return m
                else:
                    break
        for i in range(n):
            ans = max(ans, dp[i][i] + (nums[i] >= queries[dp[i][i]]))
        return ans
```