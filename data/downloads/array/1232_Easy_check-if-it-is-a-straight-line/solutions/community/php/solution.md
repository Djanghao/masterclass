# Unwrap coords, slope, compare

**Author:** yieldtoben
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-it-is-a-straight-line/solutions/5172379/](https://leetcode.com/problems/check-if-it-is-a-straight-line/solutions/5172379/)

---

# Approach
Calculate the slope of each pair proteacting against horizontal points.  Remember the first slope, if any following differ return false.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
class Solution {

    /**
     * @param Integer[][] $coordinates
     * @return Boolean
     */
    function checkStraightLine($coordinates) 
    {
      for ($s = null, $i = 1; $i < count($coord); $i++)
      {
        [$x1, $y1, $x2, $y2] = [...$coord[$i-1], ...$coord[$i]];
        $_s = ($x2 - $x1) ? ($y2 - $y1)/($x2 - $x1) : INF;
        if (is_null($s)) $s = $_s;
        if ($s != $_s) return false;
      }
      return true; 
    }
}
```