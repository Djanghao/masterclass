# [Python] ✅🔥 Clear Bit Manipulation Solution!

**Author:** J-Douglas
**Votes:** 0
**Link:** [https://leetcode.com/problems/handling-sum-queries-after-update/solutions/3203172/](https://leetcode.com/problems/handling-sum-queries-after-update/solutions/3203172/)

---

## **Please upvote/favourite/comment if you like this solution!**

# Code
```
class Solution:
    def handleQuery(self, nums1: List[int], nums2: List[int], queries: List[List[int]]) -> List[int]:
        ans = []
        n = len(nums1)
        bitmap = int(''.join([str(num) for num in nums1]), 2)
        bitcount = bitmap.bit_count()
        runningSum = sum(nums2)
        for query in queries:
            if query[0] == 1:
                l, r = query[1], query[2]
                bit_xor = int("1"*(r+1-l) + "0"*(n-(r+1)),2)
                bitmap = bitmap ^ bit_xor
                bitcount = bitmap.bit_count()
            elif query[0] == 2:
                p = query[1]
                runningSum += p*bitcount
            else:
                ans.append(runningSum)
        return ans
```