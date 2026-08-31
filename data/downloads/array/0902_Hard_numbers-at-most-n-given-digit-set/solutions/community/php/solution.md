# Solution Numbers At Most N Given Digit Set

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/numbers-at-most-n-given-digit-set/solutions/4816925/](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/solutions/4816925/)

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
     * @param String[] $digits
     * @param Integer $n
     * @return Integer
     */
    function atMostNGivenDigitSet($digits, $n) {
        $n_str = strval($n);
        $n_length = strlen($n_str);
        $d_length = count($digits);
        $result = 0;

        for ($i = 1; $i < $n_length; $i++) {
            $result += pow($d_length, $i);
        }

        for ($i = 0; $i < $n_length; $i++) {
            $less = false;
            for ($j = 0; $j < $d_length; $j++) {
                if ($digits[$j] < $n_str[$i]) {
                    $result += pow($d_length, $n_length - $i - 1);
                } elseif ($digits[$j] == $n_str[$i]) {
                    $less = true;
                    break;
                }
            }
            if (!$less) {
                return $result;
            }
        }

        return $result + 1;
    }
}

```