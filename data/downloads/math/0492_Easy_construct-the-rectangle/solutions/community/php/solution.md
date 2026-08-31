# easy, beats 100%, 0ms

**Author:** MahbubNayon
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-rectangle/solutions/5825944/](https://leetcode.com/problems/construct-the-rectangle/solutions/5825944/)

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
     * @param Integer $area
     * @return Integer[]
     */
    function constructRectangle($area) {
        $sqrt = floor(sqrt($area));
        for ($i = $sqrt; $i > 0; $i--) {
            if ($area % $i == 0) {
                return [$area / $i, $i];
                break;
            }
        } 
    }
}
```