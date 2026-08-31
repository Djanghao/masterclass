# Solutions in PHP language

**Author:** moozika
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/4640103/](https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/4640103/)

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
    * @return Integer
    */
function balancedStringSplit($s)
{
    $split = str_split($s);
    $rCounter = 0;
    $lCounter = 0;
    $counter = 0;

    foreach ($split as $item) {
        if ($item === 'R') {
            $rCounter++;
        } else if ($item === 'L') {
            $lCounter++;
        }

        if ($rCounter === $lCounter) {
            $counter++;
        }
    }

    return $counter;
}
}
```