# 2 line loop + return statement.

**Author:** yieldtoben
**Votes:** 0
**Link:** [https://leetcode.com/problems/matrix-diagonal-sum/solutions/5171410/](https://leetcode.com/problems/matrix-diagonal-sum/solutions/5171410/)

---

# Approach
Loop over rows adding the cell from the primary and secondary diagonals at the same time.  Primary diagonal is at `mat[r][r]` and secondary at `mat[r][c]`.  Increment `r` and decrement `c` and don't add secondary when `r==c`.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
class Solution {

    /**
     * @param Integer[][] $mat
     * @return Integer
     */
    function diagonalSum($mat) 
    {
      for ($sum = $r = 0, $c = count($mat[0]) - 1; $r < count($mat); $r++, $c--)
        $sum += $mat[$r][$r] + ($r == $c ? 0 : $mat[$r][$c]);
      return $sum;
    }
}
```