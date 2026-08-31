# [Python3] 3 Lines DFS. O(N) time and space. Recursion

**Author:** jimmyyentran
**Votes:** 7
**Link:** [https://leetcode.com/problems/jump-game-iii/solutions/571683/](https://leetcode.com/problems/jump-game-iii/solutions/571683/)

---

``` python
class Solution:
    def canReach(self, arr: List[int], i: int) -> bool:
        if i < 0 or i >= len(arr) or arr[i] < 0: return False
        arr[i] *= -1 # Mark visited
        return arr[i] == 0 or self.canReach(arr, i - arr[i]) or self.canReach(arr, i + arr[i])
```