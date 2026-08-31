# Beats 95%, 1 line of code, very simple solution, O(n)

**Author:** Igor0
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-encrypted-string/solutions/5431902/](https://leetcode.com/problems/find-the-encrypted-string/solutions/5431902/)

---

# Intuition
At first double the string.

# Approach
At first double the string:
`(s + s)`
Then get the substring with start index equals to `k % s.Length` and the length equals to `s.Length`:
```
return (s + s).Substring(k % s.Length, s.Length);
```

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
public class Solution {
    public string GetEncryptedString(string s, int k) {
        return (s + s).Substring(k % s.Length, s.Length);
    }
}
```