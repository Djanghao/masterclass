# Ruby - O(NlogN)

**Author:** GuptaPrachur10
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/solutions/1827638/](https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/solutions/1827638/)

---

```
def min_operations(grid, x)
    arr = grid.flatten.sort
    median = arr[arr.size/2]
    res = 0
    arr.each do |val|
        return -1 if (val-median).abs%x != 0
        res+=(val-median).abs/x
    end
    res
end
```