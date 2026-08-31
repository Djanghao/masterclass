# Sum of Subsequence Widths (PHP)

**Author:** jacintolutrezehue
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-subsequence-widths/solutions/5449060/](https://leetcode.com/problems/sum-of-subsequence-widths/solutions/5449060/)

---

# Code:

```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function sumSubseqWidths($nums) {
        $mod = 1000000007;
        $n = count($nums);
        
        // Sort the array
        sort($nums);
        
        // Precompute powers of two
        $powerOfTwo = [1];
        for ($i = 1; $i < $n; $i++) {
            $powerOfTwo[$i] = ($powerOfTwo[$i - 1] * 2) % $mod;
        }
        
        // Calculate sum of widths
        $sumWidths = 0;
        for ($i = 0; $i < $n; $i++) {
            // Calculate contribution of $nums[$i] to the sum of widths
            $contribution = ($powerOfTwo[$i] - $powerOfTwo[$n - $i - 1] + $mod) % $mod;
            $contribution = ($contribution * $nums[$i]) % $mod;
            $sumWidths = ($sumWidths + $contribution) % $mod;
        }
        
        return $sumWidths;
    }
}
```

### Explanation:

- **Sorting**: By sorting `nums`, we can easily determine the minimum and maximum elements for any subsequence.
  
- **Powers of Two**: `powerOfTwo[i]` stores \\( 2^i \\mod 10^9 + 7 \\). This array helps in quickly calculating the number of subsequences each element contributes to.

- **Width Calculation**: 
  - For each element at index `i`, calculate its contribution to the sum of widths using powers of two.
  - Compute the difference between subsequences that include or exclude the element using the powers of two array.
  
- **Modular Arithmetic**: Throughout the calculations, use modulo \\( 10^9 + 7 \\) to handle large numbers and prevent overflow.

This solution computes the required sum of widths using sorting and precomputed powers of two, ensuring it runs within acceptable time limits even for large input sizes.