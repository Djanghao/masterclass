# Php solution

**Author:** asrorbekazamjon
**Votes:** 2
**Link:** [https://leetcode.com/problems/product-of-array-except-self/solutions/4456251/](https://leetcode.com/problems/product-of-array-except-self/solutions/4456251/)

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
     * @return Integer[]
     */
    public function productExceptSelf($nums) {
        $n = count($nums);
        $output = array_fill(0, $n, 1);

        // Calculate left products
        $leftProduct = 1;
        for ($i = 0; $i < $n; $i++) {
            $output[$i] *= $leftProduct;
            $leftProduct *= $nums[$i];
        }

        // Calculate right products
        $rightProduct = 1;
        for ($i = $n - 1; $i >= 0; $i--) {
            $output[$i] *= $rightProduct;
            $rightProduct *= $nums[$i];
        }

        return $output;
    }
}
```