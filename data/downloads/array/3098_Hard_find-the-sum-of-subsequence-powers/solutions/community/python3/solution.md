# Sort and DP, easy to understand | Python

**Author:** myfriendyouaretherealclown
**Votes:** 28
**Link:** [https://leetcode.com/problems/find-the-sum-of-subsequence-powers/solutions/4947573/](https://leetcode.com/problems/find-the-sum-of-subsequence-powers/solutions/4947573/)

---

# Approach
To do the DP, We have to track: 
- `min_diff`, which means the min abs diff so far
- `last_choose`, which means the number we choose last time.

We will go through all indexes. For each index, we have to check if we met the end case first
- If `left_k==0` which means we complete the creation of the subarray, so return the `min_diff` as the power of this subarray

- If `left_k!=0` but `index==len(nums)`, which means we are at the end of the `nums` and haven\u2019t completed the subarray creation, return `0`

Now, we will have two branches:

`choose`: means we will choose the current index as an element of the subarray

`not_choose`: means we won\u2019t choose the current index as an element of the subarray

- When doing choose, we have to update the `min_diff=min(min_diff, abs(last_choose-nums[idx])` and the new `last_choose=nums[idx]`.

    How can we make sure that we get a right `min_diff` of this index? That's why we have to sort the input `nums` at the beginning. 
    Also remember minus `left_k` by `1`.

- When doing `not_choose`, we just pass the same `min_diff` and `last_choose`



Then return `choose+not_choose`

We will start with the base case

- `idx=0`

- `min_diff=inf`

- `last_choose=inf`

- `left_k=k`


# Code
```
class Solution:
    def sumOfPowers(self, nums: List[int], k: int) -> int:
        MOD = 10 ** 9 + 7
        nums.sort()
        ans = 0
        @cache
        def dp(idx, min_diff, last_choose, left_k):
            if left_k == 0:
                if min_diff != inf:
                    return min_diff
                else:
                    return 0
            if idx == len(nums):
                return 0
            choose = dp(idx+1, min(min_diff, abs(last_choose-nums[idx])), nums[idx], left_k-1)
            not_choose = dp(idx+1, min_diff, last_choose, left_k)
            return (choose + not_choose) % MOD
        return dp(0, inf, inf, k)
```