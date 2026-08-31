# Binary search solution (beats 100% runtime)

**Author:** DzmitryBahdanovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-candies-allocated-to-k-children/solutions/4777320/](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/solutions/4777320/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We need to find a pile size that will meet all the constraints.
We can check all possible sizes in range from 1 to max(candies), but here it is more efficient to use binary search to find the required pile size in this range that will be the maximum possible. 
range = [1, max(candies)]
Part of sizes will be possible solution but greatest sizes could be impossible, so we need to find maximum possuble size.
[possible sizes/impossible sizes]
<!-- # Approach -->
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n * log k) where k is the solution space's range = [1, max(candies)]
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $candies
     * @param Integer $k
     * @return Integer
     */
    function maximumCandies($candies, $k) {
        if (array_sum($candies) < $k) {
            return 0;
        } 

        $left = 1;
        $right = max($candies);

        while($left <= $right) {
            $mid = floor(($left + $right) / 2);

            if ($this->check($candies, $mid, $k)) {
                $left = $mid + 1;
            } else {
                $right = $mid - 1;
            }
        }

        return $right;
    }

    private function check($candies, $size, $k)
    {
        $count = 0;
        foreach($candies as $pile) {
            if ($pile >= $size) {
                $count += floor($pile / $size);
            }
        }

        return $count >= $k;
    }
}

```