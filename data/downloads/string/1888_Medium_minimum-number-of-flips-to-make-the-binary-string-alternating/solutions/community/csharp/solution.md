# Sliding window

**Author:** rezord
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/solutions/3022163/](https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/solutions/3022163/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
- O(2*n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MinFlips(string s) {
        var n=s.Length;
        int res = Int32.MaxValue, cur = 0;        
        for (int i = 0; i < 2*n; i++)  {
            if (s[i%n] - '0' == i%2) cur++; 
            if (i >= n && s[i%n] - '0' == i%n%2) cur--; 
            if (i >= n-1)  res = Math.Min(res, Math.Min(cur, n-cur));             
        }
        return res;
    }
}
```