# Runtime 14 ms / Memory 19.2 MB

**Author:** ordinary9843
**Votes:** 0
**Link:** [https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/solutions/3268889/](https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/solutions/3268889/)

---

Focus on 2 English letters and make the quantity of 1 of the letters odd.

# Code
```
class Solution {

    /**
     * @param Integer $n
     * @return String
     */
    function generateTheString($n) {
        return ($n % 2 === 0) ? 'a' . str_repeat('b', $n - 1) : str_repeat('b', $n);
    }
}
```