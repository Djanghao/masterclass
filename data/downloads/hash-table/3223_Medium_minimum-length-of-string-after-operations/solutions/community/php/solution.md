# Short solution (counting)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-length-of-string-after-operations/solutions/5507908/](https://leetcode.com/problems/minimum-length-of-string-after-operations/solutions/5507908/)

---

# Approach
The key insight in the solution is that if there are at least 2 occurrences of a character in a row, they can be removed without affecting the string's validity. By counting the occurrences of each character, the solution correctly identifies which characters can be removed and which ones cannot.

The solution iterates over the counts of each character and appropriately adds either 2 or 1 to the total length based on whether the count is even or odd, respectively. This logic ensures that characters are removed in pairs if possible, leading to the minimum final string length.

# Complexity
- Time complexity:
$$O(n)$$, where n is the length of the input string s. This is because the Counter object creation takes O(n) time, and the subsequent loop over the values of the Counter object also takes O(n) time.

- Space complexity:
$$O(n)$$ due to the space used by the Counter object to store the counts of each character in the input string. The space used is directly proportional to the number of unique characters in the input string, which can be at most n.

# Code
``` python3 []
class Solution:
    def minimumLength(self, s: str) -> int:
        return sum(2 if i % 2 == 0 else 1 for i in Counter(s).values())
```
``` javascript []
/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let count = {};
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    let result = 0;
    for (let value of Object.values(count)) {
        result += value % 2 === 0 ? 2 : 1;
    }
    return result;
};
```
``` php []
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function minimumLength($s) {
        $count = [];
        for ($i = 0; $i < strlen($s); $i++) {
            $char = $s[$i];
            if (isset($count[$char])) {
                $count[$char]++;
            } else {
                $count[$char] = 1;
            }
        }
        $result = 0;
        foreach ($count as $value) {
            $result += $value % 2 === 0 ? 2 : 1;
        }
        return $result;
    }
}
```