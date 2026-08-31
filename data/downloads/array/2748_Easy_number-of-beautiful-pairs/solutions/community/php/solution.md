# PHP

**Author:** Leon888
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-beautiful-pairs/solutions/3834823/](https://leetcode.com/problems/number-of-beautiful-pairs/solutions/3834823/)

---

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function countBeautifulPairs($nums) {
        $count = 0;
        foreach ($nums as $key => $num) {
            $num = (int) substr($num, 0, 1);
            while ($next = $nums[++$key] ?? null) {
                $next = (int) substr($next, -1);

                $this->isCoPrime($num, $next) && $count++;
            }
        }

        return $count;
    }

    function isCoPrime($a, $b) {
        $min = $a > $b ? $b : $a;

        for ($i = 2; $i <= $min; $i++) { 
            if ($a % $i === 0 && $b % $i === 0) {
                return false;
            }
        } 

        return true;
    }
}
```