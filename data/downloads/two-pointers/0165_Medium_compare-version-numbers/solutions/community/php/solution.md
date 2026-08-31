# Version Comparison Algorithm in PHP

**Author:** rakiburrimon
**Votes:** 1
**Link:** [https://leetcode.com/problems/compare-version-numbers/solutions/5105442/](https://leetcode.com/problems/compare-version-numbers/solutions/5105442/)

---

# Intuition
I initially approached the problem by splitting the version strings at each '.' character to obtain individual version numbers. Then, I compared the corresponding version numbers one by one to determine their relationship.

# Approach
I split both version strings into arrays of integers representing individual version numbers. Then, I compared each corresponding pair of version numbers. If one version number is smaller, I returned -1; if one is larger, I returned 1. If all version numbers are equal, I returned 0.

# Complexity
- Time complexity:
O(n), where n is the maximum number of version numbers between the two versions.

- Space complexity:
O(n), where n is the maximum number of version numbers between the two versions.

# Code
```
class Solution {

    /**
     * @param String $version1
     * @param String $version2
     * @return Integer
     */
    function compareVersion($version1, $version2) {
        $v1 = explode('.', $version1);
        $v2 = explode('.', $version2);
        $n1 = count($v1);
        $n2 = count($v2);
        
        $maxLen = max($n1, $n2);
        
        for ($i = 0; $i < $maxLen; $i++) {
            $num1 = $i < $n1 ? (int)$v1[$i] : 0;
            $num2 = $i < $n2 ? (int)$v2[$i] : 0;
            
            if ($num1 < $num2) {
                return -1;
            } elseif ($num1 > $num2) {
                return 1;
            }
        }
        
        return 0;
    }
}
```