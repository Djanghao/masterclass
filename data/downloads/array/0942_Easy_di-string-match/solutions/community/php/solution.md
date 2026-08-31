# PHP simple solution

**Author:** user0919Ie
**Votes:** 0
**Link:** [https://leetcode.com/problems/di-string-match/solutions/4927114/](https://leetcode.com/problems/di-string-match/solutions/4927114/)

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
     * @param String $s
     * @return Integer[]
     */
    function diStringMatch($s) {
        $output = [];
        $arrayCount = strlen($s);
        $sArray = str_split($s);

        $start = 0;
        $end = $arrayCount;

        foreach ($sArray as $char) {
            if ($char == 'I') {
                $output[] = $start;
                $start++;
            } else if ($char == 'D') {
                $output[] = $end;
                $end--;
            }
        }

        // Add the last element based on start and end pointers
        $output[] = $start;

        return $output;
    }
}
```