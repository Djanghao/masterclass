# NO SEARCHING | NO SORTING 👑 | BEATS 100%

**Author:** tejtharun625
**Votes:** 23
**Link:** [https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/3849373/](https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/3849373/)

---

# Intuition
we dont need actual indices, we dont care about sequence or order so we don't need sort.
binary search 
# Approach
Just count number of elements which are less than or equal to given target. say lessThanOrEqualCount
Then count number of elements which are strictly less than given target onlyLessThanCount

if lessThanOrEqualCount = onlyLessThanCount: return empty
or else all numbers between them

# Complexity
- Time complexity:
$$O(n)$$
- Space complexity: O(1)
$$O(1)$$

# Code
```
class Solution:
    def targetIndices(self, nums: List[int], target: int) -> List[int]:
        lessThanEqual = 0
        onlyLess = 0
        for i in nums:
            if i <= target:
                lessThanEqual += 1
            if i < target:
                onlyLess += 1
        return list(range(onlyLess, lessThanEqual))
```

Please upvote if you like the solution.
