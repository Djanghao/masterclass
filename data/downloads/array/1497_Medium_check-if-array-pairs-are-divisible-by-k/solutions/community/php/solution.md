# PHP solution | Beats 100% 🙌

**Author:** TarantulaNebula
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/solutions/5857637/](https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/solutions/5857637/)

---


# Complexity
- Time complexity: $$O(n + k)$$
(where n is the size of the array and k is the divisor).
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n + k)$$
(space for the input array and frequency array).
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {
    /**
     * @param Integer[] $arr
     * @param Integer $k
     * @return Boolean
     */
    function canArrange($arr, $k) {
        $freq = array_fill(0, $k, 0); // Initialize frequency array
        
        // Count frequency of each remainder
        for($i = 0; $i < sizeof($arr); $i++){
            $rem = $arr[$i] % $k;
            if($rem < 0) {
                $rem += $k; // Handle negative remainders
            }
            $freq[$rem]++;
        }
        
        // Check if remainder 0 has an even frequency
        if($freq[0] % 2 != 0) {
            return false;
        }

        // Check pairs of remainders
        for($i = 1; $i <= intdiv($k, 2); $i++) {
            if($i == $k - $i) { // Special case for k/2 when k is even
                if($freq[$i] % 2 != 0) {
                    return false;
                }
            } else if($freq[$i] != $freq[$k - $i]) {
                return false;
            }
        }

        return true;
    }
}

```