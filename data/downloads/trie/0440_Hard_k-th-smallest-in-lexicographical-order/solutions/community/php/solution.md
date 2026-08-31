# something to enjoy in php lads. the code beats 100% of the memory RT.

**Author:** Chandvanibharat
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/solutions/5820641/](https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/solutions/5820641/)

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
```php []
class Solution {

    /**
     * @param Integer $n
     * @param Integer $k
     * @return Integer
     */
    function findKthNumber($n, $k) {
        $current = 1;
        $k--; 

        while ($k > 0) {
            
            $steps = $this->calculateSteps($n, $current, $current + 1);
            if ($steps <= $k) {
                
                $current++;
                $k -= $steps;
            } else {
                
                $current *= 10;
                $k--;
            }
        }

        return $current;
    }

    function calculateSteps($n, $n1, $n2) {
        $steps = 0;
        while ($n1 <= $n) {
            $steps += min($n + 1, $n2) - $n1;
            $n1 *= 10;
            $n2 *= 10;
        }
        return $steps;
    }
}

```