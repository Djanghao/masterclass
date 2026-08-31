# [PHP] Clean O(n) Solution

**Author:** ayukhatov
**Votes:** 0
**Link:** [https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/6060243/](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/6060243/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    /**
     * @param Integer[] $prices
     * @return Integer[]
     */
    function finalPrices($prices) {
        $stack = [];
        
        foreach ($prices as $key => $price) {
            while(!empty($stack) && $prices[end($stack)] >= $price) {
                $prices[array_pop($stack)] -= $price;
            }

            $stack[] = $key;
        }

        return $prices;
    }
}
```