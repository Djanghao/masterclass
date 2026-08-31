# Commented | Easy to Understand | Faster | Simple | Python Solution

**Author:** Mrmagician
**Votes:** 14
**Link:** [https://leetcode.com/problems/max-consecutive-ones-ii/solutions/592844/](https://leetcode.com/problems/max-consecutive-ones-ii/solutions/592844/)

---

```
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        count = temp = 0
        flipped = -1 #remebers the last flipped position
        for i,v in enumerate(nums):
            if v == 1:
                temp += 1
            elif flipped == -1:
                flipped = i
                temp += 1
            else:
                temp = i - flipped # start right after the last flipped position
                flipped = i # setting current zero's position as new flipped position
            count = max(count, temp)
        return count
```

**I hope that you've found the solution useful.**
*In that case, please do upvote and encourage me to on my quest to document all leetcode problems\uD83D\uDE03*
PS: Search for **mrmagician** tag in the discussion, if I have solved it, You will find it there\uD83D\uDE38