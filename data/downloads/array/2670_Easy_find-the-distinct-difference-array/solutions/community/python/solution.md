# Set, Prefix and Suffix

**Author:** tr1nity
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-the-distinct-difference-array/solutions/3505217/](https://leetcode.com/problems/find-the-distinct-difference-array/solutions/3505217/)

---


First thought - The length of input is small. To find the number of distinct numbers, we can use Set. Therefore, we can iterate each number, put `nums[:i + 1]` and `nums[i + 1:]` to Set,  count the lengths and calculate the difference.

```py
class Solution:
    def distinctDifferenceArray(self, nums: List[int]) -> List[int]:
        res = []
        for i in range(len(nums)):
            res.append(len(set(nums[:i + 1])) - len(set(nums[i + 1:])))
        return res
```

Here's the one-liner of the above solution.

```py
class Solution:
    def distinctDifferenceArray(self, nums: List[int]) -> List[int]:
        return [len(set(nums[:i + 1])) - len(set(nums[i + 1:])) for i in range(len(nums))]
```

However, in above solution, it is not optimize as we slice the list for each index. To improve it, we can use prefix and suffix. The logic is similar. For each index, we add `nums[i]` in set and record the length. 

```py
class Solution:
    def distinctDifferenceArray(self, nums: List[int]) -> List[int]:
        pre, suf = [], []
        ps, ss = set(), set()
        n = len(nums)
        for i in range(n):
            ps.add(nums[i])
            pre.append(len(ps))
        for i in range(n - 1, -1, -1):
            suf.insert(0, len(ss))
            ss.add(nums[i])
        # pre: [1, 2, 3, 4, 5]
        # suf: [4, 3, 2, 1, 0]
        # ans: [-3, -1, 1, 3, 5]
        return [pre[i] - suf[i] for i in range(n)]
```