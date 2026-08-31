# [Python3] straightforward 2 lines with custom sort

**Author:** manparvesh
**Votes:** 16
**Link:** [https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/674566/](https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/674566/)

---

1. get median by sorting and getting the `(n-1)/2` th element
2. use lambda to do custom sort. since we need maximum, take negative of difference. if difference is equal, we just get the larger value element

```
class Solution:
    def getStrongest(self, arr: List[int], k: int) -> List[int]:
        m = sorted(arr)[(len(arr) - 1) // 2]
        return sorted(arr, key = lambda x: (-abs(x - m), -x))[:k]
```

Suggestion by @Gausstotle that makes sorting even easier to understand:

```
class Solution:
    def getStrongest(self, arr: List[int], k: int) -> List[int]:
        m = sorted(arr)[(len(arr) - 1) // 2]
        return sorted(arr, reverse=True, key = lambda x: (abs(x - m), x))[:k]
```
