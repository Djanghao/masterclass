# Low LTNCY - PHP Script Solution

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-product-queries-of-powers/solutions/3616073/](https://leetcode.com/problems/range-product-queries-of-powers/solutions/3616073/)

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
     * @param Integer $n
     * @param Integer[][] $queries
     * @return Integer[]
     */
    function productQueries($n, $queries) {
        $powers = [];
        for ($i = 0; $i < 32; $i++) {
            if ($n & (1 << $i)) {
                $powers[] = $i;
            }
        }

        $answers = [];
        for ($i = 0; $i < count($queries); $i++) {
            $left = $queries[$i][0];
            $right = $queries[$i][1];
            $product = 1;
            for ($j = $left; $j <= $right; $j++) {
                $product = (int)($product * pow(2, $powers[$j])) % 1000000007;
            }
            $answers[] = $product;
        }

        return $answers;
    }
}
```