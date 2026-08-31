# Beats 100%, one iteration, intuitive

**Author:** AlexSantat
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/solutions/5404164/](https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/solutions/5404164/)

---

# Intuition
Simply count zeroes and ones

# Approach
Iterate over the string char by char.
Count zeroes and ones.
if you meet '0' then there a 2 cases:
1) count of Ones != 0, then you need to reset
2) count of Ones == 0, then you continue.
On every 1 you increase count of Ones and recalculate answer

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
public class Solution {
    public int FindTheLongestBalancedSubstring(string s) {
        int n = s.Length;
        int ans = 0;
        for (int i = 0, cntOne = 0, cntZero = 0; i < n; i++) {
            if (s[i] == '0') {
                if (cntOne != 0) {
                    cntZero = 1;
                    cntOne = 0;
                } else cntZero++;
            } else {
                cntOne++;
                ans = Math.Max(ans, Math.Min(cntOne, cntZero) * 2);
            }
        }
        return ans;
    }
}
```