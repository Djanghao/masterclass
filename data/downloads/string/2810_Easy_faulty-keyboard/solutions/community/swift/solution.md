# Swift | One line | O(n^2) time, O(n) space

**Author:** iosdevzone
**Votes:** 1
**Link:** [https://leetcode.com/problems/faulty-keyboard/solutions/3888316/](https://leetcode.com/problems/faulty-keyboard/solutions/3888316/)

---

# Explanation

This solution uses `reduce(into)` to iterate through the characters of the input string and accumulate an array of characters. 

If the character `$1` is an `i`, the accumulated answer `$0` is `reversed()`, otherwise the character is appended to the array using `append()`.

> **Note:**
>The type of the cumulative answer was chosed to be `[Character]` to avoid having to convert to `String` after each call to `reversed()`. Instead, the completed answer is converted to a `String` just before it is returnd.

# Complexity
- Time complexity: $$O(n^2)$$ - the `reduce` is $$O(n)$$ but the `reverse` within the reduce is also $$O(n)$$ giving $$O(n^2)$$.
- Space complexity: $$O(n)$$

# Code
```
class Solution {
    func finalString(_ s: String) -> String {
        String(s.reduce(into: [Character]()) { $1 == "i" ? $0.reverse() : $0.append($1) })
    }
}

```