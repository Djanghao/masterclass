# Java Easy Solution

**Author:** Janhvi__28
**Votes:** 10
**Link:** [https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/2921696/](https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/2921696/)

---


# Code
```
class Solution {
    public int maximumValue(String[] strs) {
        int ans = 0;
        for (String s : strs) {
            ans = Math.max(ans, x(s));
        }
        return ans;
    }

    private int x(String s) {
        for (int i = 0; i < s.length(); ++i) {
            if (s.charAt(i) >= 'a' && s.charAt(i) <= 'z') {
                return s.length();
            }
        }
        return Integer.parseInt(s);
    }
}
```