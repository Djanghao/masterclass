# Solution Create Target Array in the Given Order

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/4961758/](https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/4961758/)

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
     * @param Integer[] $index
     * @return Integer[]
     */
    function createTargetArray($nums, $index) {
        $al = [];
        for ($i = 0; $i < count($nums); $i++) {
            array_splice($al, $index[$i], 0, $nums[$i]);
        }
        return $al;
    }
}

```