# Java Simple solution|Beats 100.00%|7 ms

**Author:** prasantb
**Votes:** 0
**Link:** [https://leetcode.com/problems/color-the-triangle-red/solutions/4033128/](https://leetcode.com/problems/color-the-triangle-red/solutions/4033128/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public int[][] colorRed(int n) {
          List<int[]> res = new ArrayList<>();
        for (int i = n; i - 4 >= 0; i -= 4) {
            for (int j = 1; j <= 2 * i - 1; j += 2) res.add(new int[]{i, j});
            res.add(new int[]{i - 1, 2});
            for (int j = 2 * (i - 2) - 1; j > 2; j -= 2) res.add(new int[]{i - 2, j});
            res.add(new int[]{i - 3, 1});
        }
        int t = n % 4;
        if (t >= 1) res.add(new int[]{1, 1});
        if (t >= 2) {
            res.add(new int[]{2, 1});
            res.add(new int[]{2, 3});
        }
        if (t >= 3) {
            res.add(new int[]{3, 1});
            res.add(new int[]{3, 5});
        }
        return res.toArray(new int[res.size()][]);
    }
}
```