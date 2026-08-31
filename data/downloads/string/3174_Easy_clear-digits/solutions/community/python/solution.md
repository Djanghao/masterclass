# O(1) Extra Space | C++

**Author:** not_yl3
**Votes:** 6
**Link:** [https://leetcode.com/problems/clear-digits/solutions/5280236/](https://leetcode.com/problems/clear-digits/solutions/5280236/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
When we encounter a digit we decrement `j`. Otherwise, if `s[i]` is not a digit we assign the value of `s[i]` to `s[j]`. Return the substring `s[0..j]` which would represent `s` with all digits removed. In java and python you can't directly alter strings so you would have to change it to a list first.
# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    string clearDigits(string s) {
        int j = 0;
        for (int i = 0; i < s.length(); i++){
            if (isdigit(s[i]))
                j--;
            else
                s[j++] = s[i];
        }
        return s.substr(0, j);
    }
};
```
```python []
class Solution:
    def clearDigits(self, s: str) -> str:
        j, s = 0, list(s)
        for i, c in enumerate(s):
            if c.isdigit():
                j -= 1
            else:
                s[j] = s[i]
                j += 1
        return ''.join(s[:j])
```
```Java []
class Solution {
    public String clearDigits(String s) {
        char[] t = s.toCharArray();
        int j = 0;
        for (int i = 0; i < t.length; i++){
            if (Character.isDigit(t[i]))
                j--;
            else
                t[j++] = t[i];
        }
        return new String(t, 0, j);
    }
}
```
