# Excel Sheet Column Title in php

**Author:** SANJOY_G91827
**Votes:** 1
**Link:** [https://leetcode.com/problems/excel-sheet-column-title/solutions/3774338/](https://leetcode.com/problems/excel-sheet-column-title/solutions/3774338/)

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
     * @param Integer $columnNumber
     * @return String
     */
    function convertToTitle($columnNumber) {
         $title = '';
        
        while ($columnNumber > 0) {
            $columnNumber--;
            $title = chr($columnNumber % 26 + 65) . $title;
            $columnNumber = intval($columnNumber / 26);
        }
        
        return $title;
    }
}

$columnNumber = 28;
$solution = new Solution();
$result = $solution->convertToTitle($columnNumber);
echo $result;
```