# Python Simple and Fast O(N) time O(1) space

**Author:** true-detective
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimizing-array-after-replacing-pairs-with-their-product/solutions/4131023/](https://leetcode.com/problems/minimizing-array-after-replacing-pairs-with-their-product/solutions/4131023/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Just sweep from left to right, but the only thing you should keep in mind is that if we encounter a `0` then all we have collected up to now could be multiplied by `0` and everything in the future could be multiplied by `0` as well so we immediately return 1. (The only element that will remain is `0` itself)

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
class Solution:
    def minArrayLength(self, nums: List[int], k: int) -> int:
        ans = []
        for n in nums:
            if n == 0: return 1
            if ans and ans[-1] * n <= k:
                ans[-1] *= n
            else:
                ans.append(n)
        return len(ans)

```


## Space Optimized
We only need to keep track the last element and the count of elements, therefore reducing the Space to $$O(1)$$

# Code
```
class Solution:
    def minArrayLength(self, nums: List[int], k: int) -> int:
        count, last = 0, None
        for n in nums:
            if n == 0: return 1
            if last and last * n <= k:
                last *= n
            else:
                count += 1
                last = n
        return count
```