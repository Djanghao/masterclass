# Python O(n) time O(1) space

**Author:** leeteatsleep
**Votes:** 24
**Link:** [https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/734686/](https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/734686/)

---

```
class Solution:
    def maximumProduct(self, nums: List[int]) -> int:
        smallestTwo = [float('inf')]*2
        largestThree = [float('-inf')]*3
        for num in nums:
            if num <= smallestTwo[0]:
                smallestTwo[0] = num
                smallestTwo.sort(reverse=True)
            if num >= largestThree[0]:
                largestThree[0] = num
                largestThree.sort()
        return max(smallestTwo[0]*smallestTwo[1]*largestThree[2], 
                   largestThree[0]*largestThree[1]*largestThree[2])
```

Note that the sorts take constant time since the sizes of `smallestTwo` and `largestThree` are constant.