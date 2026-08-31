# Python Intuitive Solution O(N)

**Author:** infinute
**Votes:** 43
**Link:** [https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/260888/](https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/260888/)

---

1. Calculate the total sum of the list `total`.
2. Go through the list and count how many times the cummulative sum equals `total // 3`. Every time the cummulative sum is `total // 3`, reset it to zero.
```
class Solution:
    def canThreePartsEqualSum(self, A: List[int]) -> bool:
        total = sum(A)
        if total % 3 != 0: return False
        count, cumsum, target = 0, 0, total // 3
        for num in A:
            cumsum += num
            if cumsum == target:
                cumsum = 0
                count += 1
        return count >= 3
```