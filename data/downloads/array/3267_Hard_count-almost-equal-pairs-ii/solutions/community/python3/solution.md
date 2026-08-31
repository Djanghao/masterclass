# [Python3] Brute Force

**Author:** awice
**Votes:** 13
**Link:** [https://leetcode.com/problems/count-almost-equal-pairs-ii/solutions/5686824/](https://leetcode.com/problems/count-almost-equal-pairs-ii/solutions/5686824/)

---

Let's write a function `adj(int) -> set(int)` that describes which `y` are possible to reach from `x` in at most 2 operations.

Note we only need to care about swaps in one direction if we sort the array.

# Code
```python3 []
class Solution:
    def countPairs(self, A: List[int]) -> int:
        def adj(x):
            s = list(str(x))
            n = len(s)
            ans = set()
            for i, j in combinations_with_replacement(range(n), 2):
                s[i], s[j] = s[j], s[i]
                for k, l in combinations_with_replacement(range(n), 2):
                    s[k], s[l] = s[l], s[k]
                    ans.add(int("".join(s)))
                    s[k], s[l] = s[l], s[k]
                s[i], s[j] = s[j], s[i]
            return ans

        A.sort(reverse=True)
        ans = 0
        count = Counter()
        for x in A:
            ans += count[x]
            for y in adj(x):
                count[y] += 1
        return ans
```