# Sub array

**Author:** MalyshevIO
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/3589855/](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/3589855/)

---

# Intuition
Similar to maximum average subarray


# Complexity
- Time complexity:
O(n)

# Code
```
class Solution {

    /**
     * @param String $s
     * @param Integer $k
     * @return Integer
     */
    function maxVowels($s, $k) {
        $vovels = ['a','e','o','u','i'];
        $i=0;
        $summ = 0;
        $max = 0;
        while (isset($s[$i])) {
            $summ += in_array($s[$i], $vovels) ? 1 : 0;
            if ($i > $k-1) {
                $summ -= in_array($s[$i - $k], $vovels) ? 1 : 0;
            }
            if ($i >= $k-1 && $summ > $max) {
                $max = $summ;
            }
            $i++;
        }
        return $max;
    }
}
```