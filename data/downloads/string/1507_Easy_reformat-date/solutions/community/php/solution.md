# Php simple way

**Author:** ldpromanelli
**Votes:** 1
**Link:** [https://leetcode.com/problems/reformat-date/solutions/4748829/](https://leetcode.com/problems/reformat-date/solutions/4748829/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Php deels well with dates
# Approach
<!-- Describe your approach to solving the problem. -->
Just use php date preset

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param String $date
     * @return String
     */
    function reformatDate($date) {
        return date("Y-m-d",strtotime($date));
    }
}
```