# Sliding window technique, no sets with explanation

**Author:** TressCello
**Votes:** 0
**Link:** [https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/4494423/](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/4494423/)

---

# Intuition
We can use a fixed 3 character sliding window. We can use a single variable, i, to set the window with its boundaries being i and i + 2. Let's avoid using sets and just check to see if characters within the window are the same since we only have 3 characters to check.

# Approach
Loop through the string, breaking the loop whenever the right side of the window (i + 2) becomes out of bounds. Within the loop:
1. Check if the last two characters in the window are the same. If so, we can skip an iteration and advance i by 2 since the next iteration would also contain a duplicate.
2. Check if the first and second characters match and if the first and third characters match. If neither are true, we have a 3 distinct characters and can advance the count varaiable.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```javascript []
/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let count = 0;
    let i = 0;
    while (s[i + 2]) {
        if (s[i + 1] === s[i + 2]) {
            i += 2;
            continue;
        }
        if (s[i] !== s[i + 1] && s[i] !== s[i + 2]) {
            count++;
        }
        i++;
    }
    return count;
};
```
```typescript []
function countGoodSubstrings(s: string): number {
    let count = 0;
    let i = 0;
    while (s[i + 2]) {
        if (s[i + 1] === s[i + 2]) {
            i += 2;
            continue;
        }
        if (s[i] !== s[i + 1] && s[i] !== s[i + 2]) {
            count++;
        }
        i++;
    }
    return count;
};
```
```python []
class Solution:
    def countGoodSubstrings(self, s: str) -> int:
        count = i = 0
        while i + 2 < len(s):
            if (s[i + 1] == s[i + 2]):
                i += 2
                continue
            if (s[i] != s[i + 1] and s[i] != s[i + 2]):
                count += 1
            i += 1
        return count
```
```php []
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function countGoodSubstrings($s) {
        $count = $i = 0;
        while ($i + 2 < strlen($s)) {
            if ($s[$i + 1] === $s[$i + 2]) {
                $i++;
                continue;
            }
            if ($s[$i] !== $s[$i + 1] && $s[$i] !== $s[$i + 2]) {
                $count++;
            }
            $i++;
        }
        return $count;
    }
}
```
```java []
class Solution {
    public int countGoodSubstrings(String s) {
        int count = 0, i = 0;
        while (i + 2 < s.length()) {
            if (s.charAt(i + 1) == s.charAt(i + 2)) {
                i += 2;
                continue;
            }
            if (s.charAt(i) != s.charAt(i + 1) && s.charAt(i) != s.charAt(i + 2)) {
                count++;
            }
            i++;
        }
        return count;
    }
}
```