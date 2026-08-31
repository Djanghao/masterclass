# 171. Excel Sheet Column Number

**Author:** JamshidbekAkhlidinov
**Votes:** 0
**Link:** [https://leetcode.com/problems/excel-sheet-column-number/solutions/6025740/](https://leetcode.com/problems/excel-sheet-column-number/solutions/6025740/)

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
     * @param String $columnTitle
     * @return Integer
     */
    function titleToNumber($columnTitle) {
        $sysmbols = str_split($columnTitle);
        $sum = 0;
        foreach ($sysmbols as $sysmbol){
            $value = ord($sysmbol) - 65 + 1;
            $sum = $sum * 26 + $value;
        }
        return $sum;
    }
}
```