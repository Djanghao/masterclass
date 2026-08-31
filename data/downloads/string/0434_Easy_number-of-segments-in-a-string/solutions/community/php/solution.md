# PHP Solution

**Author:** codedogxx
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-segments-in-a-string/solutions/5441087/](https://leetcode.com/problems/number-of-segments-in-a-string/solutions/5441087/)

---



# Code
```
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function countSegments($s) {
        $arr = explode(' ',$s);
        foreach ($arr as $key=>$item) {
            if ($item == "") {
                unset($arr[$key]);
            }
        }
        return count($arr);
    }
}
```