# Solution Split Array With Same Average

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-with-same-average/solutions/4789750/](https://leetcode.com/problems/split-array-with-same-average/solutions/4789750/)

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

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function splitArraySameAverage($nums) {
        $n = count($nums);
        $sum = array_sum($nums);

        $check = array_fill(0, ($n / 2) + 1, array());
        
        for ($i = 0; $i <= $n / 2; $i++) {
            $check[$i] = array();
        }
        
        for ($i = 0; $i < (1 << ($n / 2)); $i++) {
            $sum1 = 0;
            $count = 0;
            for ($j = 0; $j < $n / 2; $j++) {
                if (($i & (1 << $j)) > 0) {
                    $count++;
                    $sum1 += $nums[$n / 2 - 1 - $j];
                }
            }
            array_push($check[$count], $sum1);
        }
        
        for ($i = 0; $i < (1 << ($n / 2)); $i++) {
            $sum1 = 0;
            $count = 0;
            for ($j = 0; $j < $n / 2; $j++) {
                if (($i & (1 << $j)) > 0) {
                    $count++;
                    $sum1 += $nums[$n - 1 - $j];
                }
            }
            for ($j = 0; $j <= $n / 2; $j++) {
                if ($count + $j == 0 || $count + $j == $n) {
                    continue;
                }
                $tcount = $j + $count;
                if ((($tcount * $sum - $n * $sum1) % $n) != 0) {
                    continue;
                }
                if (in_array(($tcount * $sum - $n * $sum1) / $n, $check[$j])) {
                    return true;
                }
            }
        }
        return false;
    }
}

```