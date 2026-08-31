# PHP Solution

**Author:** sanjanakhan772
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/5286295/](https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/5286295/)

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
```
class Solution {

    /**
     * @param Integer[][] $rectangles
     * @return Integer
     */
    function interchangeableRectangles($rectangles) {

        $ratioCount = [];
        $sum        = 0;

        foreach ($rectangles as [$width,$height]) {

            // Calculate the normalized ratio of the rectangle
            $normalizedRatio = (string)($width / $height);

            $ratioCount[$normalizedRatio] = (isset($ratioCount[$normalizedRatio]) ? (float)$ratioCount[$normalizedRatio] : 0.0) + 1.0;
        }
        
        foreach ($ratioCount as $count) {
            if ($count > 1) {
                // If there are more than one rectangle with the same ratio, calculate combinations
                $sum += ($count * ($count - 1)) / 2;
            }
        }
        return $sum;
    }

}
```