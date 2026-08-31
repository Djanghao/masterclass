# [PHP] Stack solution. Beats 100%, 100%

**Author:** ayukhatov
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-subarray-minimums/solutions/6069376/](https://leetcode.com/problems/sum-of-subarray-minimums/solutions/6069376/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Monotonous stack
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer
     */
    public function sumSubarrayMins($arr) {
        $stackP = [];  // Stack for previous less elements
        $stackN = [];  // Stack for next less elements
        
        // Main logic to compute ple (previous less) and nle (next less) distances
        $ple = [];
        $nle = [];
        
        foreach ($arr as $i => $value) {
            // For previous less
            while (count($stackP) > 0 && end($stackP)[0] > $value) {
                array_pop($stackP);
            }

            $ple[$i] = count($stackP) === 0 ? $i + 1 : $i - end($stackP)[1];
            array_push($stackP, [$value, $i]);
            
            // For next less
            while (count($stackN) > 0 && end($stackN)[0] > $value) {
                $x = end($stackN);
                array_pop($stackN);
                $nle[$x[1]] = $i - $x[1];
            }

            array_push($stackN, [$value, $i]);
        }
        
        // Calculate the result
        $sum = 0;
        $mod = 1e9 + 7;

        foreach ($arr as $i => $value) {
            $itemPle = isset($ple[$i]) ? $ple[$i] : $i + 1;
            $itemNle = $nle[$i] ? $nle[$i] : count($arr) - $i;
            $sum = ($sum + $value * $itemPle * $itemNle) % $mod;
        }
        
        return $sum;
    }
}
```