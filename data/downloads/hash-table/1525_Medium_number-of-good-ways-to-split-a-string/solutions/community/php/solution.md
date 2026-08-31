# PHP simple map solution

**Author:** gsaraujo
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-good-ways-to-split-a-string/solutions/5569258/](https://leetcode.com/problems/number-of-good-ways-to-split-a-string/solutions/5569258/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
At first I thought about doing it on a single for loop by split the string inside the loop and comparing to ther other "half". That did not worked, it exceed the time limit. After that I realized I could compare only the quantity of chars in each "side".

# Approach
<!-- Describe your approach to solving the problem. -->
Thinking about comparing only the quantity of each char on each side, the idea was first to know how much of each char was in the whole string and them, one by one, comparing only the quantity of chars on each "side". Idea here is to use the types as "primitive" as possible.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) -> we will need to traverse the array at least once.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function numSplits($s) {
        $sright = [];
        $left = array();//just to ilustrate the two different ways of declaring an array in PHP.
        $end = strlen($s);
        $goodSplits = 0;

        for ($i = 0; $i < $end; $i++) {
            if($sright[$s[$i]]) {
                $sright[$s[$i]] ++;
            } else {
                $sright[$s[$i]] = 1;
            }
        }

        for ($i = 0; $i < $end; $i++) {
            if ($sright[$s[$i]] == 1) {
                unset($sright[$s[$i]]);
            } else {
                $sright[$s[$i]]--;
            }
            if($sleft[$s[$i]]) {
                $sleft[$s[$i]] ++;
            } else {
                $sleft[$s[$i]] = 1;
            }

            if (count($sleft) == count($sright)) {
                $goodSplits++;
            }
        }
        
        return $goodSplits;
        
    }
}
```