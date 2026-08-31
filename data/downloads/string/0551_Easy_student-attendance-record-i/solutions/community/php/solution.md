# One line

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/student-attendance-record-i/solutions/5395017/](https://leetcode.com/problems/student-attendance-record-i/solutions/5395017/)

---

# Complexity
- Time complexity:
$$O(n)$$, where n is the length of the input string s. This is because we iterate through the string once to count the occurrences of 'A' and to check if 'LLL' is present.

- Space complexity:
$$O(1)$$ because we are using a constant amount of extra space regardless of the input size.

# Code
```python3 []
class Solution:
    def checkRecord(self, s: str) -> bool:
        return s.count('A') < 2 and 'LLL' not in s
```
``` javascript []
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    return s.split('A').length < 3 && !s.includes('LLL');
};
```
``` php []
class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function checkRecord($s) {
        return substr_count($s, 'A') < 2 && strpos($s, 'LLL') === false;
    }
}
```