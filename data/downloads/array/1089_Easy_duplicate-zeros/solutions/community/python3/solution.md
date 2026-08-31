# Python 3 real in-place solution

**Author:** rokanor
**Votes:** 375
**Link:** [https://leetcode.com/problems/duplicate-zeros/solutions/322576/](https://leetcode.com/problems/duplicate-zeros/solutions/322576/)

---

Start from the back and adjust items to correct locations. If item is zero then duplicate it.

```
class Solution:
    def duplicateZeros(self, arr: List[int]) -> None:
        zeroes = arr.count(0)
        n = len(arr)
        for i in range(n-1, -1, -1):
            if i + zeroes < n:
                arr[i + zeroes] = arr[i]
            if arr[i] == 0: 
                zeroes -= 1
                if i + zeroes < n:
                    arr[i + zeroes] = 0
```