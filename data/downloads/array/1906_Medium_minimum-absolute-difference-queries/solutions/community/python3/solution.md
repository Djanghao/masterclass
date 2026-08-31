# Python 3   ||   9 lines,  dp , w/ explanation  ||   T/S: 69% / 49%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-queries/solutions/3686487/](https://leetcode.com/problems/minimum-absolute-difference-queries/solutions/3686487/)

---

Here's how the code works:

- We initialize two empty lists, `ans` and `dp`. `ans` stores the answers for each query, and `dp` is used to keep track of the cumulative count of numbers in the array.
- The first row of`dp`is initialized as a list of zeros with a length of ``max(nums) + 1``, which ensures that`dp`has enough columns to represent the numbers in`nums`.
- We iterate over each number `num` in `nums`. For each `num`, we creates\\ a new row `newRow` by making a copy of the latest row in `dp`. Then, we increment the count of `num` in `newRow` by one.
- After completing`dp` we iterates over each query specified by the tuples `(left, right)` in `queries`.

- For each query, the code compares the counts of numbers in the subarray `nums[left: right+1]` by taking the difference between the corresponding elements in `dp[right+1]` and `dp[left]`. The resulting list of differences is stored in`idx`.

- We then append the minimum difference from`idx`to`ans`. If `idx`has less than two posive elements, -1 is appended to`ans` as the default. We return`ans` as the answer to the problem --*ChatGPT*
```
class Solution:
    def minDifference(self, nums: List[int], 
                         queries: List[List[int]]) -> List[int]:

        ans, dp = [], [[0]*(max(nums)+1)]

        for num in nums:
            newRow = dp[-1].copy()
            newRow[num]+= 1
            dp.append(newRow)

        for left, right in queries:
            idx = [i for i,(r,l) in enumerate(zip(dp[right+1],
                                          dp[left])) if r > l]

            ans.append(min((i-j for i,j in zip(idx[1:],idx))
                                               ,default = -1))
        
        return  ans
```
[https://leetcode.com/problems/minimum-absolute-difference-queries/submissions/1285169820/](https://leetcode.com/problems/minimum-absolute-difference-queries/submissions/1285169820/)

I could be wrong, but I think that time complexity is *O*(*N* + *Q*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)` and *Q* ~ `len(queries)`.