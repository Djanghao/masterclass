# Easy to Understand | Faster | Simple | Python Solution

**Author:** Mrmagician
**Votes:** 50
**Link:** [https://leetcode.com/problems/range-sum-query-immutable/solutions/597654/](https://leetcode.com/problems/range-sum-query-immutable/solutions/597654/)

---

```
    def __init__(self, nums: List[int]):
        self.sum = []
        sum_till = 0
        for i in nums:
            sum_till += i
            self.sum.append(sum_till)

    def sumRange(self, i: int, j: int) -> int:
        if i > 0 and j > 0:
            return self.sum[j] - self.sum[i - 1]
        else:
            return self.sum[i or j]
        

```

**I hope that you've found the solution useful.**
*In that case, please do upvote and encourage me to on my quest to document all leetcode problems\uD83D\uDE03*
PS: Search for **mrmagician** tag in the discussion, if I have solved it, You will find it there\uD83D\uDE38