# Runtime: 127 ms / Memory Usage: 21.1 MB

**Author:** ordinary9843
**Votes:** 1
**Link:** [https://leetcode.com/problems/assign-cookies/solutions/2675503/](https://leetcode.com/problems/assign-cookies/solutions/2675503/)

---

Runtime: 127 ms, faster than 48.84% of PHP online submissions for Assign Cookies.
Memory Usage: 21.1 MB, less than 88.37% of PHP online submissions for Assign Cookies.

```
class Solution {

    /**
     * @param Integer[] $g
     * @param Integer[] $s
     * @return Integer
     */
    function findContentChildren($g, $s) {
        sort($g);
        sort($s);
        
        $i = 0;
        $j = 0;
        while ($i < count($g) && $j < count($s)) {
            ($g[$i] <= $s[$j]) && $i++;
            $j++;
        }

        return $i;
    }
}
```