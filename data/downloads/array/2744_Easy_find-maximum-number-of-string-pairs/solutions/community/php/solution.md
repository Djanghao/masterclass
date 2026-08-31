# Simple PHP solution

**Author:** Vlados117
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/3762980/](https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/3762980/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


# Code
```
class Solution {

    /**
     * @param String[] $words
     * @return Integer
     */
    function maximumNumberOfStringPairs($words) {
        //Here we'll keep words as array keys
        $hash = [];
        $counter = 0;
        //for every item in $words
        foreach ($words as $value) {
            //if $hash has item with key == reverse $value then increment $counter
            if ($hash[strrev($value)]) {
                $counter++;
            } else {
                //if item has not pair then just save it in $hash
                $hash[$value] = '1';
            }
        }
        return $counter;
    }
}
```
# P.S.
Upvote if it helps you)
