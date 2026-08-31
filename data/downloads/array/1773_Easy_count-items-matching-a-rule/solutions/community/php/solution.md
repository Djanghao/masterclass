# Solution in PHP

**Author:** moozika
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-items-matching-a-rule/solutions/4640967/](https://leetcode.com/problems/count-items-matching-a-rule/solutions/4640967/)

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
     * @param String[][] $items
     * @param String $ruleKey
     * @param String $ruleValue
     * @return Integer
     */
    function countMatches($items, $ruleKey, $ruleValue) {
        $counter = 0;
        foreach ($items as $item) {
            if ($ruleKey === "type" && $item[0] === $ruleValue) {
                $counter++;
            } elseif ($ruleKey === "color" && $item[1] === $ruleValue) {
                $counter++;
            } elseif ($ruleKey === "name" && $item[2] === $ruleValue) {
                $counter++;
            }
        }
        
        return $counter;
    }
}
```