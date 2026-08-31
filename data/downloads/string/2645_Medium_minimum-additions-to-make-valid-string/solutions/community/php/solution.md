# Elegant solution (greedy algorhytm)

**Author:** pozitronik
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/5710616/](https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/5710616/)

---

# Approach
Iterate over the `word` and check if the current char is expected at the same position in "abc" string.
Honestly it was a pure luck; I didn't expect to solve task like this \uD83E\uDD37\u200D\u2642\uFE0F.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```php []
class Solution {

    /**
     * @param String $word
     * @return Integer
     */
    function addMinimum($word) {
        $insertions = 0;
        $expected = 0;

        foreach (str_split($word) as $char) {
            while ($char != 'abc'[$expected]) {
                $insertions++;
                $expected = ($expected + 1) % 3;
            }
            $expected = ($expected + 1) % 3;
        }

        $insertions += (3 - $expected) % 3;
        return $insertions;
    }
}
```