# Solution Number of Burgers with No Waste of Ingredients

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/solutions/4910101/](https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/solutions/4910101/)

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

    function numOfBurgers($tomatoSlices, $cheeseSlices) {
        $total_jumbo = ($tomatoSlices - 2 * $cheeseSlices) / 2;
        $total_small = $cheeseSlices - $total_jumbo;

        if ($total_jumbo >= 0 && $total_small >= 0 && $total_jumbo == (int)$total_jumbo && $total_small == (int)$total_small) {
            return [(int)$total_jumbo, (int)$total_small];
        } else {
            return [];
        }
    }
}

```