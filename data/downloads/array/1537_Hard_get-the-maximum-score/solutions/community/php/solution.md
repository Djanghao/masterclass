# Solution Get the Maximum Score

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-the-maximum-score/solutions/5127641/](https://leetcode.com/problems/get-the-maximum-score/solutions/5127641/)

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
    public function maxSum($a, $b) {
        $M = 1000000007;
        $n = count($a);
        $m = count($b);
        $i = 0;
        $j = 0;
        $aSum = 0;
        $bSum = 0;

        while ($i < $n || $j < $m) {
            if ($i < $n && $j < $m) {
                if ($a[$i] < $b[$j]) {
                    $aSum += $a[$i];
                    $i++;
                } elseif ($a[$i] == $b[$j]) {
                    $aSum = $bSum = max($aSum, $bSum) + $a[$i];
                    $i++;
                    $j++;
                } else {
                    $bSum += $b[$j];
                    $j++;
                }
            } elseif ($i < $n) {
                $aSum += $a[$i];
                $i++;
            } else {
                $bSum += $b[$j];
                $j++;
            }
        }
        
        return max($aSum, $bSum) % $M;
    }
}

```