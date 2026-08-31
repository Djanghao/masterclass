# Solution Cells with Odd Values in a Matrix

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/solutions/4909099/](https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/solutions/4909099/)

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

    function oddCells($m, $n, $indices) {
        $rows = array_fill(0, $m, 0);
        $cols = array_fill(0, $n, 0);
        
        foreach ($indices as $index) {
            $row = $index[0];
            $col = $index[1];
            $rows[$row]++;
            $cols[$col]++;
        }
        
        $oddCount = 0;
        
        for ($i = 0; $i < $m; $i++) {
            for ($j = 0; $j < $n; $j++) {
                if (($rows[$i] + $cols[$j]) % 2 == 1) {
                    $oddCount++;
                }
            }
        }
        
        return $oddCount;
    }
}
```